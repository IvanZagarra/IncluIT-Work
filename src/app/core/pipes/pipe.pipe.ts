import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: number ){
    let dniformat= ""
    let dni1= value%1000
    let dni2= (value%1000000-dni1)
    let dni3= (value%100000000-(dni1+dni2))
    
    return dniformat=(dni3/1000000)+"."+(dni2/1000)+"."+(dni1);
    
  }
// 41.848.658
}


// let dni = 52125125

// let dni1= dni%1000
// let dni2= (dni%1000000-dni1)
// let dni3= (dni%100000000-(dni1+dni2))

// console.log((dni3/1000000)+"."+(dni2/1000)+"."+(dni1))
