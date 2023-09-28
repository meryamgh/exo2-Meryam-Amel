import {Component, OnInit} from '@angular/core';
import {FormDataService} from "../../services/form-data.service";
import {User} from "../../model/user.model";


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  public getLastFormData: User | null = null ;

  constructor(private formService: FormDataService) {
  }

  ngOnInit(): void {
    console.log(this.getLastFormData?.email);
    this.getLastFormData = this.formService.getMessage();
  }

}
