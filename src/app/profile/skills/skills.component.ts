import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TweenMax, TimelineMax } from 'gsap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    this.textRunningAnimation();
  }

  textRunningAnimation(){
    let t = TweenMax.fromTo(".block", 3 , {x:-50}, {x: 400,  repeat:-1,  yoyo:true}).progress(2).play(); 
    return t;
  }
}

