import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTeachComponent } from './show-teach.component';

describe('ShowTeachComponent', () => {
  let component: ShowTeachComponent;
  let fixture: ComponentFixture<ShowTeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
