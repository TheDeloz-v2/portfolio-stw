import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'JAVA',
      level: 'Intermedio',
      rating: 85,
    },
    {
      name: 'Angular',
      level: 'Principiante',
      rating: 50,
    },
    {
      name: 'HTML, CSS, JS',
      level: 'Intermedio',
      rating: 80,
    },
    {
      name: 'Python',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'C++',
      level: 'Intermedio',
      rating: 70,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
