import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.css']
})
export class MaterialFormComponent {
  hide=true
  public user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    department:'',
    gender:'',
    acceptTerms:false
  };
  display=false;
  public onSubmit(form:any) {
    if (form.valid) {
      this.display=true;
    }
  }
  onReset(form: NgForm): void {
    form.reset();
    this.display=false;
  }

}
