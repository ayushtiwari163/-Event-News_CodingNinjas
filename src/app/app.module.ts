import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { TagsComponent } from './components/tags/tags.component';
import { TagItemComponent } from './components/tag-item/tag-item.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardOtherUserComponent } from './components/card-other-user/card-other-user.component';
import { HomeComponent } from './components/home/home.component';
import { PagingComponent } from './components/paging/paging.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CardsComponent,
    TagsComponent,
    TagItemComponent,
    CardItemComponent,
    CardOtherUserComponent,
    HomeComponent,
    PagingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
