import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dasheader } from './dasheader';

describe('Dasheader', () => {
  let component: Dasheader;
  let fixture: ComponentFixture<Dasheader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dasheader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dasheader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
