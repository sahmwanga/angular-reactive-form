import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CodeSandbox';

  profileForm = new FormGroup({
    firstName: new FormControl(""),
    email: new FormControl("")
  }) 

  updateName(){
  }

  onSubmit(){
    console.log(this.profileForm.value)
  }
}
