import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Singleproject } from './singleproject';

describe('Singleproject', () => {
  let component: Singleproject;
  let fixture: ComponentFixture<Singleproject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Singleproject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Singleproject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
