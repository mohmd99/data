import { TrakingService } from './traking.service';
import { Component } from '@angular/core';
import { Iuser } from './interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'data';
  traking: any;
  constructor(public TrakingService: TrakingService) {}
  ngOnInit(): void {
    this.TrakingService.getTraking().subscribe((data) => {
      this.traking = data;
      const groupByName = this.traking.trackingData.reduce((group:any, product:any) => {
      const { nameEn } = product;
      group[nameEn] = group[nameEn] ?? [];
      group[nameEn].push(product);
      return group;
    }, {});
    console.log(groupByName);
    });



  }

}
