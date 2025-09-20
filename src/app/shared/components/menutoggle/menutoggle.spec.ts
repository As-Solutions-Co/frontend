import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Menutoggle } from './menutoggle';

describe('Menutoggle', () => {
  let component: Menutoggle;
  let fixture: ComponentFixture<Menutoggle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menutoggle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Menutoggle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
