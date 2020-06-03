import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCompShowcaseComponent } from './mat-comp-showcase.component';

describe('MatCompShowcaseComponent', () => {
  let component: MatCompShowcaseComponent;
  let fixture: ComponentFixture<MatCompShowcaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCompShowcaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCompShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
