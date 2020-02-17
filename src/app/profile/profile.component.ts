import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import profile from '../../assets/data/profile.json';
import { Experience} from './experience/experience';
import {Contact} from './contact/contact';
import {faRocket} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  Profile: any = profile;
  exsList: Experience[] = profile.experiences;
  contactsList: Contact[] = profile.contact;

  faRocket = faRocket;
  

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    setTimeout(() => {
        this.spinner.hide();
    }, 2000);
  }
}
