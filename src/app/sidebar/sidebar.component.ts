import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  username:string="Habiba Mohamed";
  profileImage:string='assets/images/Habeeba.jpeg'
  role: string = 'Sofware Developer';
  location: string = 'Egypt';
}
