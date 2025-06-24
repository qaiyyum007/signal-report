import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-font-style-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './font-style-table.component.html',
  styleUrl: './font-style-table.component.css'
})
export class FontStyleTableComponent {
  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Input() fontClass: string = 'default-font';
  @Input() fontSize: string = '14px';
  @Input() columnColors: Record<string, string> = {};



  getNestedValue(obj: any, path: string): any {
  return path.split('.').reduce((o, key) => (o ? o[key] : ''), obj);
}



}
