import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

     http=inject(HttpClient)

  getReport() {
    return this.http.get('https://fake-json-api.mock.beeceptor.com/customers');
  }


}
