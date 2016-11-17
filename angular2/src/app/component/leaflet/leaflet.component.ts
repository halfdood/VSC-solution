import { Component, ElementRef } from '@angular/core';

import { MapService } from '../../service/map.service';

@Component({
  selector: 'leaflet-maps',
  styleUrls: ['./leaflet.component.css'],
  templateUrl: './leaflet.component.html'
})
export class LeafletComponent {

    constructor(
        private _elementRef:ElementRef,
        private mapService: MapService
    ) {}

    ngAfterViewInit() {
        let el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

        L.Icon.Default.imagePath = 'assets/images/';
        var map = L.map(el);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        this.mapService.getPoints()
            .then(result => {
                var latTotal = 0;
                var longTotal = 0;

                for (let point of result) {
                    latTotal += point.latitude;
                    longTotal += point.longitude;
                    L.marker([point.latitude, point.longitude]).addTo(map);
                }

                map.setView([latTotal / result.length, longTotal / result.length], 13);
            });
    }
}