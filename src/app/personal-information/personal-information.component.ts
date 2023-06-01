import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})

export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Nombre:', 'Diego Estuardo Lemus Lopez'],
    ['Nacimiento:', '05/03/2003'],
    ['Intereses:', 'Cine, Videojuegos, Bádminton'],
  ];

  aboutMe: string[] = [
    'Hola, soy un joven estudiante de Ingeniería en Ciencias de la Computación y Tecnologías de la Información en la Universidad del Valle.',
    'Seguí mi carrera actual ya que siempre me ha gustado tanto el software como el hardware, la programación y todo lo que respecta a la tecnología.',
    'Este es uno de mis proyectos, donde pongo en páctica mis conocimientos en creación de aplicaciones web, ¡Mientras experimento con Angular!',
  ];

  constructor() {}

  ngOnInit(): void {}
}
