import { Injectable } from '@angular/core';
import { clientdata, editclient } from '../clientdata';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  private target!:any

  public dataLS: clientdata[] = [
    {name:"Pablo",lastname:"Lopez",email:"Lp@hotmail.com",dni:27512653,born:23021980,cell:154545445,add:"Kele 54"},
    {name:"Maria",lastname:"Hernandez",email:"ME@gmail.com",dni:45652329,born:50122020,cell:1563584512,add:"Poncio 1252"},
    {name:"Jazmin",lastname:"Herrera",email:"JazHerrera@hotmail.com",dni:27512653,born:23021980,cell:154545445,add:"Kele 54"},
    {name:"Lorenzo",lastname:"Parra",email:"LP@hotmail.com",dni:27512653,born:23021980,cell:154545445,add:"Novedad 654"},
    {name:"Diego",lastname:"Pereira",email:"DP@hotmail.com",dni:27512653,born:23021980,cell:154545445,add:"Griego 875"}
  ];

  constructor() { }

  load(){}

  add(client:clientdata){
    this.dataLS.push(client)
  }
  getAllClients(){
    return this.dataLS.slice();
  }
  deleteUser(index:number){
    this.dataLS.splice(index, 1)
  }
  editUser(index?:number,newData?:any){
    this.dataLS.splice(index!,1,newData)    
  }
}
