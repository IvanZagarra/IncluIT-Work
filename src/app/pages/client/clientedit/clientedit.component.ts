import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { clientdata } from 'src/app/core/clientdata';
import { ConfigurationService } from 'src/app/core/services/configuration.service';
import { Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'TP1-clientedit',
  templateUrl: './clientedit.component.html',
  styleUrls: ['./clientedit.component.scss']
})
export class ClienteditComponent implements OnInit {

  public formix!:FormGroup;
  public user!:clientdata;
  public id!:number

  constructor(
    private fb:FormBuilder,
    private configurationService:ConfigurationService,
    private rutas:Router,
    private activatedRoute:ActivatedRoute,
    ) {
      this.id= this.activatedRoute.snapshot.params[this.id]
      }

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

  editar(){
    console.log("Hola")
    this.user=this.formix.value
    this.configurationService.editUser(this.id,this.user);
    setTimeout(()=>{
      this.rutas.navigate(['/list']);
    }, 300);
    console.log(this.user)
    }

}