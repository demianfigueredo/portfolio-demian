import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  signinForm: FormGroup

  constructor(
    private fb: FormBuilder
  ) {
    this.signinForm = this.fb.group({
      email:["",[Validators.required]],
      password:["",[Validators.required, Validators.minLength(8)]],
    })
  }

  signIn(){
    console.log(this.signinForm.value)
  }


  ngOnInit(): void {
  }
}
