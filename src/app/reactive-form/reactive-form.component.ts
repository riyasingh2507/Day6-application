import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  userForm!: FormGroup;

  hide=true;
  constructor(private formBuilder: FormBuilder) {}


  ngOnInit() {
    this.userForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required,Validators.minLength(4)]],
        lastName: ['',[ Validators.required,Validators.minLength(4)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        gender: ['Male', Validators.required],
        department: ['', Validators.required],
        acceptTerms: [true, Validators.requiredTrue],
        userName:['']
      },


    );
    this.userForm.controls['userName'].disable();
  }
  get getUsername(): string {
    const fn = this.userForm.get('firstName')?.value.toLowerCase();
    const ln = this.userForm.get('lastName')?.value.toLowerCase();
    if (ln != '') {
      return `${fn}_${ln}`;
    } else {
      return `${fn}`;
    }
  }


  display=false;
  public onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    this.display=true;
  }
  onReset(): void {
    this.userForm.reset();
    this.display=false;
  }
}
