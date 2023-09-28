import {Component, OnInit} from '@angular/core';
import {FormDataService} from "../services/form-data.service";


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {

  public getLastFormData: any = null ;

  constructor(private formService: FormDataService) {
  }

  public ngOnInit(): void {
    this.getLastFormData = this.formService.getMessage();
  }

}
