import { Component} from '@angular/core';

@Component({
  selector: 'app-slide-project',
  templateUrl: './slide-project.component.html',
  styleUrls: ['./slide-project.component.css','slide-project-query.component.css']
})
export class SlideProjectComponent {

  images = [
    {
      src: 'assets/img/cine-canva.png',
      alt: 'Projeto 1'
    },
    {
      src: 'assets/img/ecommerce-canva.png',
      alt: 'Projeto 2'
    },
    {
      src: 'assets/img/buzz-ifood-canva.png',
      alt: 'Projeto 3'
    },
  ];
  
}
  

