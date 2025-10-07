import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Confcode } from './confcode';

describe('Confcode', () => {
  let component: Confcode;
  let fixture: ComponentFixture<Confcode>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Confcode]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Confcode);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
