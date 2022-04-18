import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textBoldPipe',
})
export class TextBoldPipePipe implements PipeTransform {
  transform(value: string): any {
    return '<b>' + value + '</b>';
  }
}
