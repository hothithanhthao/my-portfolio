import { Component, OnInit, Input } from '@angular/core';

import { Experience} from './experience';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

 @Input() exs: Experience[];
  constructor() { }
  
  
  ngOnInit(): void {}

}
