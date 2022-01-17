import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  // mainCategory
  allEventsImg = "https://www.codingninjas.com/assets-landing/images/all-events-selected.svg";
  bootCampImg = "https://files.codingninjas.in/bootcamp_events_unselected-5397.png";
  codinEventImg = "https://www.codingninjas.com/assets-landing/images/coding-events-unselected.svg";
  webinarImg = "https://www.codingninjas.com/assets-landing/images/webinar-unselected.svg";
  workshopImg = "https://files.codingninjas.in/workshop_unselected-5395.png";

  @Output() navEmit = new EventEmitter<number>();
  @Input() subCategory: any;
  category = 1;
  constructor() { }
  ngOnInit(): void {
    //console.log(this.category);
  }
  onNavclick(id: number) {

    this.navEmit.emit(id);
    if (id % 1 === 0)
      this.category = id;
  }

}
