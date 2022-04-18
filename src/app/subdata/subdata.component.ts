import { Component, OnInit } from '@angular/core';
import { Iuser } from '../interface';
import { USERS, subSet } from '../mockdata';
@Component({
  selector: 'app-subdata',
  templateUrl: './subdata.component.html',
  styleUrls: ['./subdata.component.css'],
})
export class SubdataComponent implements OnInit {
  data = USERS;
  Subdata = subSet;
  FinalData: any;
  constructor() {}

  ngOnInit(): void {
    console.log(this.data);
    console.log(subSet);
    this.FinalData = this.data.filter(
      (item) =>
        !this.Subdata.find((other) =>
          Object.keys(other).every(
            (prop) =>
              item.id == other.id &&
              item.system == other.system &&
              item.name == other.name
          )
        )
    );
    console.log(this.FinalData);
    console.log(this.DFinalData)
  }
  DFinalData=this.data.filter((value,index,self) =>
   self.findIndex((t)=>['id'].every(k=>t.id==value.id))===index)
}
