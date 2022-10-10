import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule,} from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



const MATERIAL_MODULES=[
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatIconModule
  
];

const SHARED_MODULES=[
  FormsModule,
  ReactiveFormsModule,
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...MATERIAL_MODULES,
    ...SHARED_MODULES,
    
  ],
  exports:[
    ...MATERIAL_MODULES,
    ...SHARED_MODULES,
  ]
})
export class SharedModule { }
