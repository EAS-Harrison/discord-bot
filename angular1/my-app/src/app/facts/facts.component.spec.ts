import { ComponentFixture, TestBed } from '@angular/core/testing';

import { factComponent } from './facts.component';

describe('factComponent', () => {
  let component: factComponent;
  let fixture: ComponentFixture<factComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [factComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(factComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
