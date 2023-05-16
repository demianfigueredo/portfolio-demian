import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  persona:persona = new persona("","","")

  constructor(public personaService: PersonaService) {
    
  }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data=> {this.persona=data})
  }

}
