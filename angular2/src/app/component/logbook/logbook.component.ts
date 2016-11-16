import { Component, OnInit } from '@angular/core';

import { Logbook } from '../../model/logbook';
import { LogbookService } from '../../service/logbook.service';


@Component({
    selector: 'logbook',
    templateUrl: './logbook.component.html',
    styleUrls: ['./logbook.component.css']
})
export class LogbookComponent implements OnInit {
   logs: Logbook[] = [];


   constructor(private logbookService: LogbookService){}


    ngOnInit(): void {
        this.logbookService.getLogs()
            .then(logs => {
                 this.logs = logs;
            });
    }
}