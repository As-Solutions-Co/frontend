import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Softbutton } from './softbutton';

describe('Softbutton', () => {
  let component: Softbutton;
  let fixture: ComponentFixture<Softbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Softbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Softbutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
