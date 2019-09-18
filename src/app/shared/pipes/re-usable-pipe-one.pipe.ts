import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reUsablePipeOne'
})
export class ReUsablePipeOnePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
