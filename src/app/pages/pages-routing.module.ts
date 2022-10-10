import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteditComponent } from './client/clientedit/clientedit.component';
import { ClientformComponent } from './client/clientform/clientform.component';
import { ClientlistComponent } from './client/clientlist/clientlist.component';
import { PagesComponent } from './pages.component';

const routes: Routes = [
    { path: '',
    component: PagesComponent,
    children:[
        {
            path:"list",
            component:ClientlistComponent
        },
        {
            path:"alta",
            component:ClientformComponent
        },
        {
            path:"edit/:index",
            component:ClienteditComponent
        },
        
    ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
