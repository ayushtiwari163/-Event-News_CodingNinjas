import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() allcard_data: any;
  constructor() {
  }

  ngOnInit(): void {
  }

}
////https://api.codingninjas.com/api/v3/events"?event_category="CODING_EVENT"&event_sub_category="Upcoming"&tag_list=""&offset="

//this.apiUrl + "?event_category="+this.event_category+"&event_sub_category="+this.event_sub_category+"&tag_list="this.tags[i]"&offset="+this.offset;