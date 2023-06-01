import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Bliss',
      technologies: 'ReactJS',
      description: [
        'Sistema de órdenes y pedidos, así como servicio de catálogo virtual.',
        'Sigue en progreso...',
      ],
      link: 'https://bliss-57wr0jp78-franzcastillo.vercel.app/',
      imagePath: '../../assets/p1.JPG',
    },
    {
      title: 'Imitación de SpaceX',
      technologies: 'ReacJS',
      description: [
        'Página web imitando a la página principal de SpaceX, con información de la empresa y sus cohetes.',
        'Proyecto para curso de STW',
      ],
      link: 'https://stw-proyecto-1.vercel.app/',
      imagePath: '../../assets/p2.JPG',
    },
    {
      title: 'Medic Care',
      technologies: 'ReacJS, Supabase',
      description: [
        'Sistema de control hospitalario. Permite manejo de citas, pacientes, doctores, inventario, etc.',
        'Proyecto para curso de Base de Datos',
      ],
      link: 'https://hospital-proyecto-fc621.web.app/',
      imagePath: '../../assets/p3.JPG',
    },
    {
      title: 'Juego de Memoria',
      technologies: 'ReactJS',
      description: [
        'Juego de Memoria con contador de movimientos y mensaje de victoria. Temática de Luis Miguel.',
        'Laboratorio para curso de STW',
      ],
      link: 'https://lab8-stw-5df00.web.app/',
      imagePath: '../../assets/p4.JPG',
    },
    {
      title: 'Calculadora',
      technologies: 'ReactJS',
      description: [
        'Calculadora con funciones básicas, display con historial y responsive. Temática de Pokemon.',
        'Laboratorio para curso de STW',
      ],
      link: 'https://lab9-stw-b9484.web.app/',
      imagePath: '../../assets/p5.JPG',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
