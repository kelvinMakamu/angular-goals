import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Quote } from './quote';
import { ApiResponse } from './api-response';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  quote: Quote;
  constructor(private http: HttpClient) { 
    this.quote = new Quote("","");
  }

  getRandomQuote(){
    let promise = new Promise((resolve,reject)=>{
      this.http.get<ApiResponse>(environment.apiUrl).toPromise().then(response=>{
        this.quote.quote = response.quote
        this.quote.author = response.author

        resolve()
      },
      error=>{
        this.quote.quote = "Never, never, never give up"
        this.quote.author = "Winston Churchill"

        reject(error)
      })
    })
    return promise
  }

}
