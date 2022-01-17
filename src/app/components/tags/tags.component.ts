import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiTagService } from '../../services/api-tag.service';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  myData: any;
  tags = [];
  soMore = false;
  soArray = [];
  soinfo = "more tags";
  selectedTag: Array<string> = [];
  markerTag: Array<boolean> = [];
  @Output() tagSelected = new EventEmitter();

  // calling api for data
  callApi() {
    this.data.getData().subscribe(tag => {
      this.myData = tag;
      this.tags = this.myData.data.tags;
      this.showTags();
    })
  }
  constructor(private data: ApiTagService) {
    this.callApi();
    for (let i = 0; i < this.tags.length; i++)
      this.markerTag.push(false);
  }
  showTags() {
    this.soArray = [];
    if (this.soMore === false) {
      for (let i = 0; i < 12; i++)
        this.soArray.push(this.tags[i]);
    }
    else {
      for (let i = 0; i < this.tags.length; i++)
        this.soArray.push(this.tags[i]);
    }
  }
  ngOnInit(): void {

  }

  showMore() {
    //console.log(this.soArray);
    this.soMore = !this.soMore;
    if (this.soMore === true)
      this.soinfo = "show less";
    else
      this.soinfo = "more tags";
    this.showTags();
  }
  // delete tag from selectedTag
  deleteFromSelected(tag: any) {
    for (let i = 0; i < this.selectedTag.length; i++) {
      if (this.selectedTag[i] === tag) {
        this.selectedTag.splice(i, 1);
        break;
      }
    }
  }
  triggerTag(tag: any) {
    // find the index of tag in tags array
    let index = 0;
    for (let i = 0; i < this.tags.length; i++) {
      if (tag == this.tags[i])
        index = i;
    }
    this.markerTag[index] = !this.markerTag[index];
    if (this.markerTag[index] === true)
      this.selectedTag.push(tag);
    else {
      this.deleteFromSelected(tag);
    }
    this.tagSelected.emit(this.selectedTag);
  }
}
