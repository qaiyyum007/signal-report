import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnColorPickerComponent } from './column-color-picker.component';

describe('ColumnColorPickerComponent', () => {
  let component: ColumnColorPickerComponent;
  let fixture: ComponentFixture<ColumnColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColumnColorPickerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
