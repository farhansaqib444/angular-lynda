import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { mediaItezListComponent } from './media-item-list.component';

describe('MediaItemListComponent', () => {
  let component: MediaItemListComponent;
  let fixture: ComponentFixture<MediaItemListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaItemListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
