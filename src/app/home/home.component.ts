import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  name: string = 'Habiba Mohmaed';
  title: string = 'Sofware Developer';
  location: string = 'Eygpt';
  mainHeading: string = 'I am';
  subHeading: string = 'a Developer';
  description: string = '100% html5 bootstrap templates Made By';
  backgroundImage: string = 'assets/images/background.png';
}
