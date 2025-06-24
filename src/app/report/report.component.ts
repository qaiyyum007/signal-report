import { Component, computed, inject, signal } from '@angular/core';
import { ReportService } from '../report.service';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { FontStyleTableComponent } from '../font-style-table/font-style-table.component';
import { ColumnVisibleTableComponent } from '../column-visible-table/column-visible-table.component';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';
import { ColumnColorPickerComponent } from '../column-color-picker/column-color-picker.component';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [CommonModule,FontStyleTableComponent,ColumnVisibleTableComponent,ColumnColorPickerComponent],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  reportApi=inject(ReportService);
  public reportData = toSignal(this.reportApi.getReport(), { initialValue: [] });
  reportList = computed(() => {
  return (this.reportData() ?? []) as any[];
});

 fontOptions = ['default-font', 'serif-font', 'monospace-font', 'large-font'];
  selectedFont = signal('default-font');
  fontSize = signal('14px');
  columnColors = signal<Record<string, string>>({});



  changeFont(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const font = selectElement.value;
    this.selectedFont.set(font);
  }

  displayedColumns = [
  'id',
  'username',
  'password',
  'email',
  'phone',
  'address.street',
  'address.city',
  'address.state',
  'address.zipcode',
  'address.country',
  'created_at'
];


  visibleColumns = signal<Set<string>>(new Set(this.displayedColumns));



onVisibilityChange(newSet: Set<string>) {
  this.visibleColumns.set(newSet); 
}


getVisibleColumns(): string[] {
return this.displayedColumns.filter(col => this.visibleColumns().has(col));;
}

getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((o, key) => o?.[key], obj);
}



downloadPDF() {
  const doc = new jsPDF({
    orientation: 'l',
    unit: 'mm',
    format: 'a3',
    putOnlyUsedFonts: true
  });

const now = new Date();
const dateTimeString = now.toLocaleString();
const label = `Downloaded on: ${dateTimeString}`;

doc.setFontSize(10);

const pageWidth = doc.internal.pageSize.getWidth();

const textWidth = doc.getTextWidth(label);

const x = (pageWidth - textWidth) / 2;

doc.text(label, x, 8);

  const columns = this.getVisibleColumns();
  const data = this.reportList();
  const rows = data.map(row => columns.map(col => this.getNestedValue(row, col)));

  const head = [columns];
  const columnStyles: any = {};

  columns.forEach((col, index) => {
    const hex = this.columnColors()[col];
    if (hex) {
      columnStyles[index] = {
        fillColor: this.hexToRgb(hex)
      };
    }
  });

  autoTable(doc, {
    head: head,
    body: rows,
    startY: 10,
    styles: {
      halign: 'left',
      valign: 'middle'
    },
    columnStyles: columnStyles,
    theme: 'grid', 
    tableWidth: 'auto'
  });

  doc.save('User.pdf');
}



hexToRgb(hex: string): number[] {
  hex = hex.replace('#', '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}




changeFontSize(event: Event) {
  const input = (event.target as HTMLInputElement).value;
  this.fontSize.set(input);
}


}
