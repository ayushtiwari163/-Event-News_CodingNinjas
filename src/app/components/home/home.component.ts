import { Component, OnInit } from '@angular/core';
import { CardEventService } from '../../services/card-event.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private apiUrl = "https://api.codingninjas.com/api/v3/events";
  eventCategory = "ALL_EVENTS";
  eventSubCategory = "Upcoming";
  tagList: Array<string> = [];
  offSet = 0;
  myData: any;
  eventsObj = [];
  events = [];
  curPage = 1;
  totPages = 1;

  // update EventCategory api url
  setEventcategory(id: number) {
    if (id === 1)
      this.eventCategory = "ALL_EVENTS";
    else if (id === 2)
      this.eventCategory = "WEBINAR";
    else if (id === 3)
      this.eventCategory = "CODING_EVENT";
    else if (id === 4)
      this.eventCategory = " BOOTCAMP_EVENT";
    else if (id === 5)
      this.eventCategory = "WORKSHOP";
    this.eventSubCategory = "Upcoming";
  }
  // updating subEvenCategory api url
  subEventcategory(id: number) {
    if (id === 1.1)
      this.eventSubCategory = "Upcoming";
    else if (id === 1.2)
      this.eventSubCategory = "Archived";
    else if (id === 1.3)
      this.eventSubCategory = "All Time Favorites"
  }
  // making api url
  addTagUrl(): string {
    let value = "";

    for (let i = 0; i < this.tagList.length - 1; i++)
      value += this.tagList[i] + ',';
    if (this.tagList.length !== 0)
      value += this.tagList.flat(-1);
    return value;

  }
  makeUrl(): string {
    let myUrl = this.apiUrl + "?event_category=" + this.eventCategory + "&event_sub_category=" + this.eventSubCategory + "&tag_list=";
    myUrl += this.addTagUrl();
    myUrl += "&offset=" + this.offSet;
    return myUrl;

  }

  constructor(private cardData: CardEventService) {

  }
  // get data from api
  callApi() {
    let url = this.makeUrl();
    this.cardData.getData(url).subscribe((data: any) => {
      this.eventsObj = data.data.events;
      this.events = JSON.parse(JSON.stringify(this.eventsObj));
      this.totPages = data.data.page_count;
      this.curPage = (this.offSet / 20) + 1;
    }
    )
  }

  ngOnInit(): void {
    this.callApi();
  }
  navData(id: number) {
    if (Number(id) === id && id % 1 === 0)
      this.setEventcategory(id);
    else
      this.subEventcategory(id);
    this.offSet = 0;
    this.callApi();
  }
  selectTags(selectedTags: any) {
    this.tagList = selectedTags;
    this.offSet = 0;
    this.callApi();


  }
  // page change
  prevPage() {
    this.offSet -= 20;
    this.curPage--;
    this.callApi();
    document.documentElement.scrollTop = 0;

  }
  nextPage() {
    this.offSet += 20;
    this.curPage++;
    this.callApi();
    document.documentElement.scrollTop = 0;

  }
  pageChange(page: number) {
    // console.log(page);
    if (page === -1)
      this.prevPage();
    else if (page === 0)
      this.nextPage();
    else {
      this.offSet = (page - 1) * 20;
      this.callApi();
      document.documentElement.scrollTop = 0;
    }
  }
}
