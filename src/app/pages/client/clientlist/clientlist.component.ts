import { Component, OnInit } from '@angular/core';


import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { clientdata } from 'src/app/core/clientdata';
import { ConfigurationService } from 'src/app/core/services/configuration.service';

@Component({
  selector: 'TP1-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss']
})
export class ClientlistComponent implements OnInit {


  clientlist:clientdata[]=[];
  newClient!:any;

displayedColumns: string[]=['name','lastname','email','dni', 'born','cell','add','action'];
  public dataSource!:MatTableDataSource<any>;

  constructor(
    private usuarioLS:ConfigurationService,
    private rutas: Router,

  ) { }

  ngOnInit(): void {
    this.getAll()
    
    }
  getAll(){
    this.clientlist= this.usuarioLS.getAllClients();
    this.dataSource= new MatTableDataSource(this.clientlist)
  }

    deleteUser(index:number){
      this.usuarioLS.deleteUser(index);
      this.getAll()
    }
    editUser(index?:number){
      setTimeout(()=>{
        this.rutas.navigate([`/edit/${index}`]);
      }, 0);
    }
  
  }