/**
 * Created by mayankrd on 7/26/17.
 */
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer} from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {

    // splitting input url on '='
    // the result is two elements in the output array
    const parts = url.split('=');
    const id = parts[1];
    url = 'https://www.youtube.com/embed/' + id;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
