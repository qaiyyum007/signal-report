import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnVisibleTableComponent } from './column-visible-table.component';

describe('ColumnVisibleTableComponent', () => {
  let component: ColumnVisibleTableComponent;
  let fixture: ComponentFixture<ColumnVisibleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnVisibleTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnVisibleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
