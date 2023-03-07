import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisMatchComponent } from './tennis-match.component';

describe('TennisMatchComponent', () => {
  let component: TennisMatchComponent;
  let fixture: ComponentFixture<TennisMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TennisMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TennisMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
