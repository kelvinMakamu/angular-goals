import { Injectable } from '@angular/core';
import { goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalServiceService {

  constructor() { }

  getGoals(){
    return goals;
  }

  
}
