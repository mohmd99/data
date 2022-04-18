import { TrakingService } from './../traking.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit {
  constructor(private TrakingService: TrakingService) {}
  roles: any;
  selected: any;
  ngOnInit(): void {
    this.TrakingService.getRoles().subscribe((data) => {
      this.roles = data;
    });
  }
  select: any;
  parent: any = [];
  parents: any = [];
  onChange(e: any) {
    parent = e.value;
    this.parents = e.value;
    console.log(parent);
  }
}
