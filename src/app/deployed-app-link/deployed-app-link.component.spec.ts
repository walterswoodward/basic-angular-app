import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployedAppLinkComponent } from './deployed-app-link.component';

describe('DeployedAppLinkComponent', () => {
  let component: DeployedAppLinkComponent;
  let fixture: ComponentFixture<DeployedAppLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeployedAppLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeployedAppLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
