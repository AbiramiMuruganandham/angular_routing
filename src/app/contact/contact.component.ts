import { Component, OnInit } from '@angular/core';



interface User {
  firstName: string;
  lastName: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  onSubmit(formValue: any) {
    console.log(formValue);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
