import { CommonModule } from '@angular/common';
import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';

@Component({
  selector: 'app-column-visible-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './column-visible-table.component.html',
  styleUrl: './column-visible-table.component.css'
})
export class ColumnVisibleTableComponent {
 columns = input<string[]>([]);

  visibleColumns = input<Set<string>>(new Set());

  visibilityChanged = output<Set<string>>();
  
  toggleVisibility(column: string) {
    const newVisible = new Set(this.visibleColumns());
    if (newVisible.has(column)) {
      newVisible.delete(column);
    } else {
      newVisible.add(column);
    }
    this.visibilityChanged.emit(newVisible);
  }



}
