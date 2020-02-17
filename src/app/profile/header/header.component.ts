import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { TweenMax, TimelineMax } from 'gsap';
import {faCode} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('animeObject') AnimationObject: ElementRef;

  @Input() fullName: string;
  @Input() currentTitle: string;
  @Input() currentResident: string;
  
  faCode = faCode;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit():void{
    this.layerAnimation();
  }

  layerAnimation(){
    let anime: TimelineMax = new TimelineMax();
    
    anime.from(this.AnimationObject.nativeElement, 1, {x: -200, opacity: 0});
    
    return anime;
}
  
}
