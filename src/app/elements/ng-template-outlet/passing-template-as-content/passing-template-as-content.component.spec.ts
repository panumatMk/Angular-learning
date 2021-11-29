import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassingTemplateAsContentComponent } from './passing-template-as-content.component';

describe('PassingTemplateAsContentComponent', () => {
  let component: PassingTemplateAsContentComponent;
  let fixture: ComponentFixture<PassingTemplateAsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassingTemplateAsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassingTemplateAsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
