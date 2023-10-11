import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpUpdateEditComponent } from './emp-update-edit.component';

describe('EmpUpdateEditComponent', () => {
  let component: EmpUpdateEditComponent;
  let fixture: ComponentFixture<EmpUpdateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpUpdateEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpUpdateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
