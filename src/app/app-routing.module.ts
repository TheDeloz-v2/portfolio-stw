import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BanerComponent } from './baner/baner.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '#baner', component: BanerComponent },
  { path: '#personal-info', component: PersonalInformationComponent },
  { path: '#education', component: EducationComponent },
  { path: '#skills', component: SkillsComponent },
  { path: '#projects', component: ProjectsComponent },
  { path: '#contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
