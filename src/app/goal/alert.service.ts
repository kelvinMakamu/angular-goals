import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  displayAlertNotification(message: string){
    alert(message);
  }

}
