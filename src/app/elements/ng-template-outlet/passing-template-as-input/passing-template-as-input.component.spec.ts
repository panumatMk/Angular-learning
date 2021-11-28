import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingTemplateAsInputComponent } from './passing-template-as-input.component';

describe('PassingTemplateAsInputComponent', () => {
  let component: PassingTemplateAsInputComponent;
  let fixture: ComponentFixture<PassingTemplateAsInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassingTemplateAsInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassingTemplateAsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
