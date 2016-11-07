import {Component, ViewEncapsulation, ElementRef} from '@angular/core';

import './leafletMaps.loader';

import { DriverLog } from '../../../../models/driver-log';
import { DriverLogService } from '../../../../services/driver-log.service';

@Component({
  selector: 'leaflet-maps',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./leafletMaps.scss')],
  template: require('./leafletMaps.html')
})
export class LeafletMaps {

  constructor(
    private _elementRef:ElementRef,
    private driverLogService:DriverLogService
  ) { }

  ngAfterViewInit() {
    let el = this._elementRef.nativeElement.querySelector('.leaflet-maps');

    L.Icon.Default.imagePath = 'assets/img/theme/vendor/leaflet';
    var map = L.map(el).setView([-33.95, 18.5], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    this.driverLogService.getLogs()
      .then(logs => {
        for (let log of logs) {
          L.marker([+log.lat, +log.long]).addTo(map);
        }
      });
    // L.marker([51.5, -0.09]).addTo(map)
    //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    //   .openPopup();
  }
}
