import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup
} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'localPty';
  bsInlineValue = new Date();

  minDate = new Date(2017, 5, 10);
  maxDate = new Date(2018, 9, 15);

  bsValue: Date = new Date();
  form: FormGroup;

  public contactName: string = "";
  public date = new FormControl(new Date());
  public contactGender: string = "male";
  public startBirthDate = new Date(2000, 1, 1);


  myDateValue: Date;

  ngOnInit() {
    this.myDateValue = new Date();
  }
  customAction() {
    alert("Some custom action");
  }
}
