import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {
  mainColor = "#FA7328";
  @Input() totalPage: any;
  @Input() currPage: any;

  @Output() outputPage = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  nextPage() {
    //console.log("next Page");
    this.outputPage.emit(0);
  }
  prevPage() {
    //console.log("prevPage");
    this.outputPage.emit(-1);
  }
  onChange() {
    let stringPage = (document.getElementById("pageVal") as HTMLInputElement).value;
    let page = parseInt(stringPage);
    //console.log(page);
    this.outputPage.emit(page);


  }

}
