import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldCommonComponent } from './field-common.component';

describe('FieldCommonComponent', () => {
  let component: FieldCommonComponent;
  let fixture: ComponentFixture<FieldCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldCommonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FieldCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
