import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { TweenMax, TimelineMax } from "gsap";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Input() intro: string;
  
  constructor() { }

  ngOnInit(): void {
  
  }

}
