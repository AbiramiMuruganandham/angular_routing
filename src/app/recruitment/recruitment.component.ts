import { Component, OnInit } from '@angular/core';


interface User {
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {


  onSubmit(formValue: any) {
    console.log(formValue);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
