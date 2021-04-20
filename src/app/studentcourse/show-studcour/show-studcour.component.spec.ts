import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudcourComponent } from './show-studcour.component';

describe('ShowStudcourComponent', () => {
  let component: ShowStudcourComponent;
  let fixture: ComponentFixture<ShowStudcourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStudcourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStudcourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
