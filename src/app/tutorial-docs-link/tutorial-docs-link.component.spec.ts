import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDocsLinkComponent } from './tutorial-docs-link.component';

describe('TutorialDocsLinkComponent', () => {
  let component: TutorialDocsLinkComponent;
  let fixture: ComponentFixture<TutorialDocsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialDocsLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialDocsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
