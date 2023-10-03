import {Injectable} from '@angular/core';
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class FormDataService {
  public lastForm: User | null = null;
}
