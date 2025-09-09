import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Outlinebutton } from './outlinebutton';

describe('Outlinebutton', () => {
  let component: Outlinebutton;
  let fixture: ComponentFixture<Outlinebutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Outlinebutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Outlinebutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
