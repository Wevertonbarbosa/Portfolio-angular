import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css', 'carousel.component-query.css'],
})
export class CarouselComponent {
  images = [
    {
      src: 'assets/img/blog-slide.gif',
      alt: 'Projeto 1',
      title: 'Blog Ifood - (Ifood)',
      body: 'Blog feito no curso da DIO Innovation, bootcamp da empresa Ifood.',
      url: 'https://github.com/Wevertonbarbosa/Blog-Angular-Dio',
    },
    {
      src: 'assets/img/BuzzFeed-Grande-slide.gif',
      alt: 'Projeto 2',
      title: 'Quiz Buzz - (Ifood)',
      body: 'Jogo Quiz Buzz feito na DIO Innovation, bootcamp da empresa Ifood.',
      url: 'https://github.com/Wevertonbarbosa/quiz-buzzfee-ifood-DIO',
    },
    {
      src: 'assets/img/TropaCafé-slide.gif',
      alt: 'Projeto 3',
      title: 'Start Tech - (TOTVS)',
      body: 'App para motoristas de ônibus, feito no program Start tech na TOTVS.',
      url: 'https://github.com/vitorRenan7/Aplicativo-Padrinhos',
    },
    {
      src: 'assets/img/WellCAMP-slide.gif',
      alt: 'Projeto 4',
      title: 'Well Camp - (IOS)',
      body: 'Site de TCC no curso Instituto da Ooportunida Social (IOS).',
      url: 'https://github.com/Ericodesenvolvedor/WellCamp',
    },
    {
      src: 'assets/img/Cine-Grande-slide.gif',
      alt: 'Projeto 5',
      title: 'Estudo React.Js - Well Cine',
      body: 'Site desenvolvido em estudo, consumo de uma API com React.Js.',
      url: 'https://github.com/Wevertonbarbosa/Filmes-React',
    },
    {
      src: 'assets/img/ecommerce-slide.gif',
      alt: 'Projeto 6',
      title: 'Ecommerce - Estudos',
      body: 'Site feito em estudo para aprimoramento e aumento do portfólio.',
      url: 'https://github.com/Wevertonbarbosa/Projeto-Site_Ecommerce',
    },
    {
      src: 'assets/img/AllForFood-slide.gif',
      alt: 'Projeto 7',
      title: 'App Pizza - (TOTVS)',
      body: 'App desenvolvido no projeto final do programa Start Tech na TOTVS.',
      url: 'https://github.com/Wevertonbarbosa/Front-AllForFood',
    },
    {
      src: 'assets/img/pokedex-grande-slide.gif',
      alt: 'Projeto 8',
      title: 'Pokedex JavaScript - (Ifood)',
      body: 'Pokedex desenvolvido em JavaScript consumindo uma Api, bootcamp da empresa Ifood.',
      url: 'https://github.com/Wevertonbarbosa/js-developer-pokedex',
    },
    {
      src: 'assets/img/Portfolio-slide.gif',
      alt: 'Projeto 9',
      title: 'Portfólio em React.JS - React.JS',
      body: 'Primeiro portifólio desenvolvido com React.JS.',
      url: 'https://github.com/Wevertonbarbosa/Meu-Site',
    },
    {
      src: 'assets/img/Java-slide.gif',
      alt: 'Projeto 10',
      title: 'Aplicações Java - Java',
      body: 'Aplicações desenvolvidas em Java em alguns cursos.',
      url: 'https://github.com/Wevertonbarbosa/StartTech-JAVA',
    },
    {
      src: 'assets/img/Java-Spring-slide.gif',
      alt: 'Projeto 11',
      title: 'Aplicações Spring Boot - Spring Boot',
      body: 'Algumas aplicações em Java com Sping Boot.',
      url: 'https://github.com/InaAraujo/ProjetoFinal---Grupo2-',
    },
    {
      src: 'assets/img/SQLServe-slide.gif',
      alt: 'Projeto 12',
      title: 'Aplicações Sql Server - Sql Server',
      body: 'Estudos de Sql Server n curso da Start tech.',
      url: 'https://github.com/Wevertonbarbosa/StartTech-Banco-Dados-Sql',
    },
  ];

  currentImageIndex = 0;
  prevImage() {
    this.currentImageIndex =
      this.currentImageIndex === 0
        ? this.images.length - 1
        : this.currentImageIndex - 1;
  }

  nextImage() {
    this.currentImageIndex =
      this.currentImageIndex === this.images.length - 1
        ? 0
        : this.currentImageIndex + 1;
  }
}
