import { Component, Input, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Logbook } from '../../model/logbook';
import { LogbookService } from '../../service/logbook.service';


@Component({
    selector: 'log-detail',
    templateUrl: './log-detail.component.html',
    styleUrls: ['./log-detail.component.css']
})
export class LogDetailComponent implements OnInit {
    @Input()
    log: Logbook;


    constructor(
        private logbookService: LogbookService,
        private route: ActivatedRoute,
        private location: Location
    ){}


    goBack(): void {
        this.location.back();
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.logbookService.getLog(id)
                .then(log => this.log = log);
        })
    }

    save(): void {
        this.logbookService.update(this.log)
            .then(() => this.goBack());
    }
}