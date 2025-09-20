import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Solidbutton } from './solidbutton';

describe('Solidbutton', () => {
  let component: Solidbutton;
  let fixture: ComponentFixture<Solidbutton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Solidbutton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Solidbutton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
