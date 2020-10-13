import { Component, OnInit } from '@angular/core';
import { AlertService } from './alert.service';
import { QuoteService } from '../quote/quote.service';
import { GoalServiceService } from './goal-service.service';
import { Goal } from '../goal';
import { Quote } from '../quote/quote';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[];
  quote: Quote;

  constructor(private goalService: GoalServiceService, private alertService: AlertService,
    private quoteService: QuoteService){
    this.goals = this.goalService.getGoals();
  }

  toggleDetails(index: number){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  addNewGoal(goal:any){
    let goalLength = this.goals.length;
    goal.id=goalLength++;
    goal.completeDate= new Date(goal.completeDate);
    this.goals.unshift(goal);
    this.alertService.displayAlertNotification(`The goal : ${goal.name} has been added successfully!!`);
  }

  deleteGoal(isComplete:boolean, index: number): void{
    if(isComplete){
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`);
      if(toDelete){
        this.goals.splice(index,1);
        this.alertService.displayAlertNotification(`The goal: ${this.goals[index].name} has been deleted successfully!!`);
      }
    }
  }

  ngOnInit(){
    this.quoteService.getRandomQuote();
    this.quote = this.quoteService.quote;
  }

}
