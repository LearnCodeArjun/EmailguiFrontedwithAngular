import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private baseurl:string="http://localhost:4444";

  constructor(private http:HttpClient) { }

  sendEmail(r:any)
  {
     return this.http.post('${this.baseUrl}/sendmail',r)
  }
}
