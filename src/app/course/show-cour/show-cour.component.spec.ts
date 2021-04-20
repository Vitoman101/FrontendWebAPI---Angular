import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCourComponent } from './show-cour.component';

describe('ShowCourComponent', () => {
  let component: ShowCourComponent;
  let fixture: ComponentFixture<ShowCourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
