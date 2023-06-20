import {Component} from '@angular/core';

@Component({
  selector: 'app-slide-project',
  templateUrl: './slide-project.component.html',
  styleUrls: ['./slide-project.component.css','slide-project-query.component.css']
})
export class SlideProjectComponent {

  images = [
    {
      src: 'assets/img/Cine-well-slide.gif',
      alt: 'Projeto 1',
      body:'Site desenvolvido em estudo, consumo de uma API com React.Js.'
    },
    {
      src: 'assets/img/Pokedex-slide.gif',
      alt: 'Projeto 2',
      body: 'Site feito em estudo para aprimoramento e aumento do portfólio.'
    },
    {
      src: 'assets/img/Buzz-Feed-slide.gif',
      alt: 'Projeto 3',
      body:'Jogo Quiz Buzz feito na DIO Innovation, bootcamp da empresa Ifood.'
    },
  ];
  
}
  

