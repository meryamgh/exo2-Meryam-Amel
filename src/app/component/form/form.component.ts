import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {FormDataService} from "../../services/form-data.service";
import {User} from "../../model/user.model";

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
    const user = new User();
    const age = this.contactForm.get('age')?.value;
    user.nom = this.contactForm.get('nom')?.value ?? '';
    user.prenom = this.contactForm.get('prenom')?.value ?? '';
    user.age = age ? Number(age) : null;

    user.email = this.contactForm.get('email')?.value ?? '';
    user.commentaire = this.contactForm.get('commentaire')?.value ?? '';

    this.dataToSendService.setLastForm(user);
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
