import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamiccomponent',
  templateUrl: './dynamiccomponent.component.html',
  styleUrls: ['./dynamiccomponent.component.css']
})
export class DynamiccomponentComponent implements OnInit {
  @Input() data: string;
  constructor() { }

  ngOnInit() {
  }

}
