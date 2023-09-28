import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FormDataService} from "../services/form-data.service";
import {User} from "../model/user.model";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public isChecked: boolean = false;

  public contactForm = new FormGroup(
    {
      prenom: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      age: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      commentaire: new FormControl('', [Validators.required]),

    }
  );

  constructor(private router: Router, private dataToSendService: FormDataService) {
  }

  public sendCommentaire() {
    alert("Le formulaire est valide");
    this.dataToSendService.setLastForm(new User().deserialize(this.contactForm.value));
    this.router.navigate(['/']);
  }

  public doCheck() {
    this.isChecked = !this.isChecked;
    if (!this.isChecked) {
      this.contactForm.get('email')?.setValidators([Validators.required, Validators.email]);
    } else {
      this.contactForm.get('email')?.clearValidators();
      this.contactForm.get('email')?.reset('');
    }
    this.contactForm.get('email')?.updateValueAndValidity();
  }

}
