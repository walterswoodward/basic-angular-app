import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalLinksComponent } from './personal-links.component';

describe('PersonalLinksComponent', () => {
  let component: PersonalLinksComponent;
  let fixture: ComponentFixture<PersonalLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
