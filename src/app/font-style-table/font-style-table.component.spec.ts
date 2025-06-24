import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontStyleTableComponent } from './font-style-table.component';

describe('FontStyleTableComponent', () => {
  let component: FontStyleTableComponent;
  let fixture: ComponentFixture<FontStyleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontStyleTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontStyleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
