import { Component, OnInit } from '@angular/core';
import { DiplomasService } from '../diplomas.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  
  diplomas:any=[]

  constructor(private diplomasService:DiplomasService) {
    this.diplomas = this.diplomasService.getDiplomas()
  }

  ngOnInit(): void {
    
  }
}
