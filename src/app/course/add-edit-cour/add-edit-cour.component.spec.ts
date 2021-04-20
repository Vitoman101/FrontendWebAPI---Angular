import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCourComponent } from './add-edit-cour.component';

describe('AddEditCourComponent', () => {
  let component: AddEditCourComponent;
  let fixture: ComponentFixture<AddEditCourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
