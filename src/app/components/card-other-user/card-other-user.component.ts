import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-other-user',
  templateUrl: './card-other-user.component.html',
  styleUrls: ['./card-other-user.component.css']
})
export class CardOtherUserComponent implements OnInit {
  @Input() imgSrc!: string;
  @Input() name!: string;
  @Input() otherUsers!: string;
  @Input() regStatus!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
