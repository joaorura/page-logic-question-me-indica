import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogicQuestionViewComponent } from './logic-question-view.component';

describe('LogicQuestionViewComponent', () => {
  let component: LogicQuestionViewComponent;
  let fixture: ComponentFixture<LogicQuestionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogicQuestionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogicQuestionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
