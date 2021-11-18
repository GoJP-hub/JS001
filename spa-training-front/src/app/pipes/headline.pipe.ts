import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'headline'
})
export class HeadlinePipe implements PipeTransform {

  transform(content: any, headlineLength: number): string {
    if (content) {
      if (content.length > headlineLength){
        const headline = content.substring(0, headlineLength) + "...";
        return headline;
      }
    }
    return content;

  }

}
