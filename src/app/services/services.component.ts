import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  showDiv = {
    Android : false,
    Web : false,
    next : false
  }

  ngOnInit(): void {
  }

}
