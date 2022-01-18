import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() data: any;
  resOpen = true;
  topUsers = [];
  regStatus: string = "";
  otherUsers: number = 0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    if (this.data.registration_status !== "REGISTRATIONS_OPEN")
      this.resOpen = false;
    else
      this.resOpen = true;
    this.topUsers = this.data.registered_users.top_users;
    this.regStatus = this.data.registration_status;
    this.otherUsers = this.data.registered_users.other_users_count;
  }

}
