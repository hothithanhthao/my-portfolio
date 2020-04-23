import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { NgxSpinnerModule } from "ngx-spinner";
import { ProfileComponent } from './profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [HeaderComponent, AboutComponent, ExperienceComponent, SkillsComponent, ContactComponent, ProfileComponent],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    FontAwesomeModule
  ]
})
export class ProfileModule { }
