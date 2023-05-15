import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiplomasService {

  constructor() { }
  getDiplomas(){
    return [
      {
        name:'Diseño gráfico',
        start_date: '06/2022',
        end_date: 'Present',
        modality: 'Modalidad remota',
        institute: 'Universidad de Buenos Aires, Facultad de Arquitectura, Diseño y Urbanismo.'
      },
      {
        name:'Full Stack Developer Jr.',
        start_date: '11/2022',
        end_date: 'Present',
        modality: 'Modalidad remota',
        institute: 'Instituto Nacional de Tecnología Industrial, Argentina Programa.'
      },
      {
        name:'Full Stack Web Developer',
        start_date: '08/2021',
        end_date: '02/2021',
        modality: 'Modalidad remota',
        institute: 'Universidad Tecnológica Nacional.'
      },
      {
        name:'Bachiller en Ciencias Sociales',
        start_date: '03/2015',
        end_date: '11/2020',
        modality: 'Modalidad presencial',
        institute: 'Instituto Privado Santa Doménica.'
      },
    ]
  }
}
