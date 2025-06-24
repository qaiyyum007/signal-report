import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-column-color-picker',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './column-color-picker.component.html',
  styleUrl: './column-color-picker.component.css'
})
export class ColumnColorPickerComponent {

  @Input() columns: string[] = [];
  @Input() columnColors: Record<string, string> = {};
  @Output() columnColorsChange = new EventEmitter<Record<string, string>>();

  availableColors = ['#ffffff', '#fff7cc', '#e0f7fa', '#f8d7da', '#d4edda'];
  selectedColumn: string = '';


  updateColor(col: string, event: Event) {
    const selectElement = event.target as HTMLSelectElement|null;
    if (!selectElement) return;
    const color = selectElement.value;
    const updatedColors = { ...this.columnColors, [col]: color };
    this.columnColorsChange.emit(updatedColors);
  }

  resetColors() {
  this.columnColors = {};
  this.columnColorsChange.emit(this.columnColors);
}



}

