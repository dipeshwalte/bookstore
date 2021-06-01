import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placed',
  templateUrl: './placed.component.html',
  styleUrls: ['./placed.component.scss']
})
export class PlacedComponent implements OnInit {
  orderId:number = 123456;
  constructor() { }

  ngOnInit(): void {
  }

}
