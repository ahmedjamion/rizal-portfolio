import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRizalComponent } from './about-rizal.component';

describe('AboutRizalComponent', () => {
  let component: AboutRizalComponent;
  let fixture: ComponentFixture<AboutRizalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutRizalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutRizalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
