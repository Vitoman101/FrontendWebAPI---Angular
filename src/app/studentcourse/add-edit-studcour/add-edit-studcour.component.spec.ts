import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditStudcourComponent } from './add-edit-studcour.component';

describe('AddEditStudcourComponent', () => {
  let component: AddEditStudcourComponent;
  let fixture: ComponentFixture<AddEditStudcourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditStudcourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditStudcourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
