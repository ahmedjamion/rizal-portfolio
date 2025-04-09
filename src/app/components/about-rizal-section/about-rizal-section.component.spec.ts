import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRizalSectionComponent } from './about-rizal-section.component';

describe('AboutRizalSectionComponent', () => {
  let component: AboutRizalSectionComponent;
  let fixture: ComponentFixture<AboutRizalSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutRizalSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutRizalSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
