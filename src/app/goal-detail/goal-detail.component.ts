import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';
import { ActivatedRoute } from '@angular/router';
import { GoalServiceService } from '../goal/goal-service.service';

@Component({
  selector: 'app-goal-detail',
  templateUrl: './goal-detail.component.html',
  styleUrls: ['./goal-detail.component.css']
})
export class GoalDetailComponent implements OnInit {

  goal: Goal;

  ngOnInit(): void {
    let id    = this.route.snapshot.paramMap.get('id');
    this.goal = this.goalService.getGoal(id);
  }

  constructor(private route: ActivatedRoute, private goalService:GoalServiceService) { }

}
