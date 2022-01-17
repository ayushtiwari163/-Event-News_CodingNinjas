import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOtherUserComponent } from './card-other-user.component';

describe('CardOtherUserComponent', () => {
  let component: CardOtherUserComponent;
  let fixture: ComponentFixture<CardOtherUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardOtherUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOtherUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
