import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myToUpperCase'
})
export class ToUpperCasePipe implements PipeTransform {

  transform(text: String, args?: any): any {
    return text.toUpperCase();
  }

}
