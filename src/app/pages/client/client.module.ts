import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientformComponent } from './clientform/clientform.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { ClienteditComponent } from './clientedit/clientedit.component';

const Client_Components=[
  ClientlistComponent,
  ClientformComponent,
  ClienteditComponent
]

@NgModule({
  declarations: [
    Client_Components
    
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    
    
  ],
  exports:[
    Client_Components
    
  ]
})
export class ClientModule { }
