import { Component, OnInit, VERSION } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      passenger: new FormArray([
        new FormGroup({
          name: new FormControl(''),
          address: new FormControl(''),
          number: new FormControl(''),
          email: new FormControl('')
        })
      ])
    });

    console.log(this.form);
  }

  get passenger(): FormArray {
    return this.form.get('passenger') as FormArray;
  }

  addPassenger() {
    this.passenger.push(
      new FormGroup({
        name: new FormControl(''),
        address: new FormControl(''),
        number: new FormControl(''),
        email: new FormControl('')
      })
    );
  }
}
