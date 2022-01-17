import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-item',
  templateUrl: './tag-item.component.html',
  styleUrls: ['./tag-item.component.css']
})
export class TagItemComponent implements OnInit {
  tagColor = false;
  @Input() tag: any;
  @Output() event = new EventEmitter();
  constructor() {
    // console.log(this.tag);
  }
  ngOnInit(): void {
  }
  onClick() {
    this.tagColor = !this.tagColor;
    this.event.emit(this.tag);
  }

}
