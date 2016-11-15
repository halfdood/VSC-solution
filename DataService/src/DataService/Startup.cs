using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using DataService.Models;
using DataService.Interfaces;
using Microsoft.EntityFrameworkCore;
using DataService.Repository;

namespace DataService
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();

            Configuration = builder.Build();
        }

        public IConfigurationRoot Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // Add framework services.
            var connection = Configuration["ConnectionStrings:DefaultConnection"];
            var useMockData = Configuration.GetValue<bool>("AppSettings:UseMockData");
            if (useMockData)
            {
                services.AddSingleton<ILogBookRepository, MockLogBookRepository>();
                services.AddSingleton<ISharedRepository, SharedRepository>();
                services.AddSingleton<IUserRepository, MockUserRepository>();
            }
            else
            {
                services.AddDbContext<DataContext>(options => options.UseSqlServer(connection));
                services.AddSingleton<ISharedRepository, SharedRepository>();
                services.AddScoped<ILogBookRepository, LogbookRepository>();
                services.AddScoped<IUserRepository, UserRepository>();
            }

            services.AddCors();

            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(
            IApplicationBuilder app,
            IHostingEnvironment env,
            ILoggerFactory loggerFactory,
            ISharedRepository sharedRepo)
        {
            loggerFactory.AddConsole(Configuration.GetSection("Logging"));
            loggerFactory.AddDebug();

            app.UseCors(builder => builder.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin().AllowCredentials());

            app.UseCookieAuthentication(new CookieAuthenticationOptions()
            {
                AuthenticationScheme = sharedRepo.AuthenticationScheme,
                AutomaticAuthenticate = true
            });

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseBrowserLink();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }

            app.UseStaticFiles();

            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
