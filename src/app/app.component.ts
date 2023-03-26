import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FyzioApp';


/*
  getUrl()
  {
    return "url('https://mdbootstrap.com/img/Photos/new-templates/glassmorphism-article/img7.jpg')";
  }

 */

  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.background = '';
      // .body.style.background = 'https://i.cbc.ca/1.3638138.1479852274!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/milky-way-concordia-pakistan.jpg';//

  }
}
