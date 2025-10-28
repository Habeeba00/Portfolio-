import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills = [
    { name: 'Photoshop', percentage: 75, color: 'bg-primary' },
    { name: 'HTML5', percentage: 65, color: 'bg-success' },
    { name: 'WordPress', percentage: 70, color: 'bg-warning' },    
    { name: 'JQuery', percentage: 60, color: 'bg-danger' },
    { name: 'CSS3', percentage: 90, color: 'bg-info' },
    { name: 'SEO', percentage: 80, color: 'bg-secondary' }
  ];
  sectionTitle: string = 'My Specialty';
  mainHeading: string = 'My Skills';


}
