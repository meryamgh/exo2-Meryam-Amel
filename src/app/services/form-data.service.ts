import { Injectable } from '@angular/core';
import { FormGroup } from "@angular/forms";
import { User } from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  private _lastForm: User | null = null;

  public setLastForm(newUser: User) {
    this._lastForm = newUser;
  }

  public getMessage(): User | null {
    return this._lastForm;
  }
}
