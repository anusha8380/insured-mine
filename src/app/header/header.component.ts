import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  heading:string = 'Star Wars';
  subHeading:string = 'The swapi project';
}
