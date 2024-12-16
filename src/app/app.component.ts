import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
    loginForm: FormGroup;
    errorMessage: string = '';
  
    constructor(private fb: FormBuilder) {
      this.loginForm = this.fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
    }
  
    onSubmit() {
      if (this.loginForm.valid) {
        alert("Form Submitted");
        this.errorMessage = ''; 
      } else {
        alert('Fill Up The Form....!');
      }
    }
  }
