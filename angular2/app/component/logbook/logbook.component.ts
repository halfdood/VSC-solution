import { Component, OnInit } from '@angular/core';

import { Logbook } from '../../model/logbook';
import { LogbookService } from '../../service/logbook.service';


@Component({
    selector: 'logbook',
    templateUrl: 'app/component/logbook/logbook.component.html',
    styleUrls: ['app/component/logbook/logbook.component.css']
})
export class LogbookComponent implements OnInit {
   logs: Logbook[] = [];


   constructor(private logbookService: LogbookService){}


    ngOnInit(): void {
        this.logbookService.get()
            .then(logs => {
                 this.logs = logs;
            });
    }
}