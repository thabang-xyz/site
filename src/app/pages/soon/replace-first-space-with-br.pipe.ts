import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceFirstSpaceWithBr'
})
export class ReplaceFirstSpaceWithBrPipe implements PipeTransform {

  transform(value: string): string {
    return value.replace(/ /g, '\n');
  }

}
