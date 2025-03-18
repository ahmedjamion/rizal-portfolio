import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyClassworksComponent } from './my-classworks.component';

describe('MyClassworksComponent', () => {
  let component: MyClassworksComponent;
  let fixture: ComponentFixture<MyClassworksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyClassworksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyClassworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
