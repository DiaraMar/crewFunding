import { Component, OnInit } from '@angular/core';
import { Pool } from '../pool';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  pools : Pool [] = [
    {
      id: 1,
      amountProject : 5000,
      closingDateProject : null,
      descriptionProject : 'Projet de garde denfant',
      nameProject: 'Gribouilli',
      releaseDateProject :'25/09/2003',
      statusProject : 'launched'
  },
  {
      id: 2,
      amountProject : 2000,
      closingDateProject : '16/10/2020',
      descriptionProject : 'Lunette du futur',
      nameProject: 'opti titi',
      releaseDateProject :'25/02/2021',
      statusProject : 'funded'
  },
  {
    id: 3,
    amountProject : 5000,
    closingDateProject : null,
    descriptionProject : 'Projet de garde denfant',
    nameProject: 'Gribouilli',
    releaseDateProject :'25/09/2003',
    statusProject : 'launched'
},
{
    id: 4,
    amountProject : 2000,
    closingDateProject : '16/10/2020',
    descriptionProject : 'Lunette du futur',
    nameProject: 'opti titi',
    releaseDateProject :'25/02/2021',
    statusProject : 'funded'
}]; 

  constructor() { }

  ngOnInit(): void {
    
  }
  

}
