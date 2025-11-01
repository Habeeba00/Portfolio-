import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{HomeComponent}from'./home/home.component';
import{AboutComponent}from'./about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { WorkComponent } from './work/work.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,title:'Home page'},
  {path:'about',component:AboutComponent,title:'About '},
  {path:'skills',component:SkillsComponent,title:'Skills '},
  {path:'experience',component:ExperienceComponent,title:'Experience '},
  {path:'work',component:WorkComponent,title:'Work'
    // ,children:[
    //   {path:'',redirectTo:'all',pathMatch:'full'},
    //   {path:'software',redirectTo:'all',pathMatch:'full'},
    //   {path:'graphic-design',redirectTo:'all',pathMatch:'full'},
    //   {path:'apps',redirectTo:'all',pathMatch:'full',title:'Apps'},
    // ],
  },
  {path:'**',component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
