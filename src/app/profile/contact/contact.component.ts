import { Component, OnInit, Input } from '@angular/core';
import {Contact} from './contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  @Input() contacts: Contact[];
  @Input() email: string;
  @Input() end: string;

  constructor() { }

  ngOnInit(): void {
  }

}
