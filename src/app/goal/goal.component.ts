import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[]= [
    new Goal(1, "Watching",'1: Find an online version and watch merlin find his son',new Date(2020,10,25)),
    new Goal(21, "Walking",'21: Find an online version and watch merlin find his son',new Date(2001,3,14)),
    new Goal(31, "Washing", '31: Find an online version and watch merlin find his son',new Date(2002,3,14)),
    new Goal(41, "Climbing",'41: Find an online version and watch merlin find his son',new Date(2003,3,14)),
    new Goal(51, "Clodering",'51: Find an online version and watch merlin find his son',new Date(2004,3,14))
  ];

  toggleDetails(index: number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  addNewGoal(goal:any){
    let goalLength = this.goals.length;
    goal.id=goalLength++;
    goal.completeDate= new Date(goal.completeDate);
    this.goals.push(goal);
  }

  deleteGoal(isComplete, index){
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`);
      if(toDelete){
        this.goals.splice(index,1);
      }
    }
  }

  constructor(){
  }

  ngOnInit(): void {
  }

}
