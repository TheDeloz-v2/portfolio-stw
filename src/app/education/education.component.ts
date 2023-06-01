import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Colegio Elim Central",
      course: 'Primaria-Básicos-Diversificado',
      duration: '2010-2020',
      score: 'Alto',
    },
    {
      institute: 'COSEDE',
      course: 'Curso de Ingles Avanzado',
      duration: '2018-2020',
      score: 'C2',
    },
    {
      institute: 'Universidad del Valle de Guatemala',
      course: 'Ingeniería en CCTI',
      duration: '2021-Actualidad',
      score: 'Alto',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
