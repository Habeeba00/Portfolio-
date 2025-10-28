import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  sectionTitle: string = 'ABOUT US';
  mainHeading: string = 'WHO AM I?';
  name: string = 'Habiab Mohamed';

  introText: string = 'Hi Im Habiab Mohamed On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word (and) and the Little Blind Text should turn around and return to its own, safe country.';

  bodyText: string = 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.';

  services = [
    {
      icon: 'fas fa-lightbulb',
      iconColor: '#00bcd4',
      title: 'Graphic Design',
      borderColor: '#00bcd4'
    },
    {
      icon: 'fas fa-globe',
      iconColor: '#f44336',
      title: 'Web Design',
      borderColor: '#f44336'
    },
    {
      icon: 'fas fa-database',
      iconColor: '#ffc107',
      title: 'Software',
      borderColor: '#ffc107'
    },
    {
      icon: 'fas fa-mobile-alt',
      iconColor: '#9c27b0',
      title: 'Application',
      borderColor: '#9c27b0'
    }
  ];
}
