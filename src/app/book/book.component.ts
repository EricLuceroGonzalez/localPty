import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  constructor() { }

  submittedForm = false;
  formBook: FormGroup;
  public name: string;
  public lastname: string;
  public email: string;
  public phone: string;
  public bsInlineValue = new Date();
  public message: string;

  ngOnInit() {
    console.log("ngOnInit() !!!!!!!!!!!!!!!");

    this.formBook = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(4)]),
      lastname: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl(),
      // bsInlineValue: new FormControl(Validators.required),
      // message: new FormControl()
    });
  }
  onSubmit() {

    // TODO: Use EventEmitter with form value
    console.warn(this.formBook.value);
    // stop here if form is invalid
    if (this.formBook.invalid) {
      console.log('this.formBook.invalid / ' + this.submittedForm);
      return;
    } else {
      this.submittedForm = true;
      console.log('this.formBook.VALID / ' + this.submittedForm);
    }
  }





}
