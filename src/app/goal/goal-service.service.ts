import { Injectable } from '@angular/core';
import { goals } from '../goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalServiceService {

  getGoals(){
    return goals;
  }

  getGoal(id:any){
   for(let goal of goals){
     if(goal.id == id){
       return goal;
     }
   } 
  }

  constructor() { }

}
