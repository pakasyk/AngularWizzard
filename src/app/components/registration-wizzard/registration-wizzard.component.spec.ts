import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationWizzardComponent } from './registration-wizzard.component';

describe('RegistrationWizzardComponent', () => {
  let component: RegistrationWizzardComponent;
  let fixture: ComponentFixture<RegistrationWizzardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationWizzardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationWizzardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
