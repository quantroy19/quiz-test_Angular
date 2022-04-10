import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender',
})
export class GenderPipe implements PipeTransform {
  transform(value: any) {
    if (value === 'true') {
      return 'Nam';
    } else {
      return 'Nữ';
    }
  }
}
