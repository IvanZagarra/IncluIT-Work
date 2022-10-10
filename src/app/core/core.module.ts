import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationService } from './services/configuration.service';
import { PipePipe } from './pipes/pipe.pipe';





export function configFactory(configurationService:ConfigurationService){
  return()=>configurationService.load()
}



@NgModule({
  declarations: [
    PipePipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PipePipe
  ],
  providers: [
    ConfigurationService,
    {
      provide:APP_INITIALIZER,
      useFactory:configFactory,
      deps:[
        ConfigurationService
      ],
      multi:true,
    }
  ]
})
export class CoreModule { }
