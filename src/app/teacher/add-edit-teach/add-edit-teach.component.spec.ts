import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTeachComponent } from './add-edit-teach.component';

describe('AddEditTeachComponent', () => {
  let component: AddEditTeachComponent;
  let fixture: ComponentFixture<AddEditTeachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTeachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditTeachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
