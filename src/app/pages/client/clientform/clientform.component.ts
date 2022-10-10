import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { clientdata } from 'src/app/core/clientdata';
import { ConfigurationService } from 'src/app/core/services/configuration.service';
import { Router} from '@angular/router';


@Component({
  selector: 'TP1-clientform',
  templateUrl: './clientform.component.html',
  styleUrls: ['./clientform.component.scss']
})
export class ClientformComponent implements OnInit {

  public formix!:FormGroup;
  public user!:clientdata;

  constructor(
    private fb:FormBuilder,
    private configurationService:ConfigurationService,
    private rutas:Router,
    ) { }

  ngOnInit(): void {
    this.formix = this.fb.group({
      name:["",[Validators.required,]],
      lastname:["",[Validators.required]],
      email:["",[Validators.required,Validators.email]],
      dni:["",[Validators.required,Validators.min(1000000),Validators.max(99999999)]],
      born:["",[Validators.required]],
      cell:["",[Validators.required]],
      add:["",[Validators.required]]
    })
  }
  addClient(){
    this.user=this.formix.value
    this.configurationService.add(this.user);
    setTimeout(()=>{
      this.rutas.navigate(['/list']);
    }, 300);
    }


}