import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  jobs:any=[]

  constructor(private jobsService:JobsService) {
    this.jobs = this.jobsService.getJobs()
  }

  ngOnInit(): void {
    
  }
}
