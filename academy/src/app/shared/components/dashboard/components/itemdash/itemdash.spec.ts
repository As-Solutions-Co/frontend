import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Itemdash } from './itemdash';

describe('Itemdash', () => {
  let component: Itemdash;
  let fixture: ComponentFixture<Itemdash>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Itemdash]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Itemdash);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
