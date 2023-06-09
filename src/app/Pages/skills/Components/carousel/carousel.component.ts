import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css','carousel.component-query.css'],
})
export class CarouselComponent {
  images = [
    {
      src: 'assets/img/Blog-details-canva.png',
      alt: 'Projeto 1',
      title: 'Blog Ifood - (Ifood)',
      body: 'Blog feito no curso da DIO Innovation, bootcamp da empresa Ifood.',
      url:'https://github.com/Wevertonbarbosa/Blog-Angular-Dio',
      tech: [
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech: 'https://img.icons8.com/color/256/angularjs.png',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech: 'https://img.icons8.com/color/256/typescript.png',
          alt: 'Tecnologia Usada',
        },
      ],
    },
    {
      src: 'assets/img/buzz-ifood-canva.png',
      alt: 'Projeto 2',
      title: 'Quiz Buzz - (Ifood)',
      body: 'Jogo Quiz Buzz feito na DIO Innovation, bootcamp da empresa Ifood.',
      url:'https://github.com/Wevertonbarbosa/quiz-buzzfee-ifood-DIO',
      tech: [
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech: 'https://img.icons8.com/color/256/angularjs.png',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech: 'https://img.icons8.com/color/256/typescript.png',
          alt: 'Tecnologia Usada',
        },
      ],
    },
    {
      src: 'assets/img/inscreveErro-cafe-canva.png',
      alt: 'Projeto 3',
      title: 'Start Tech - (TOTVS)',
      body: 'App para motoristas de ônibus, feito no program Start tech na TOTVS.',
      url:'https://github.com/vitorRenan7/Aplicativo-Padrinhos',
      tech: [
        {
          imgTech: 'https://img.icons8.com/color/256/ionic.png',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech: 'https://img.icons8.com/color/256/angularjs.png',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech: 'https://img.icons8.com/color/256/typescript.png',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech: 'https://img.icons8.com/color/256/spring-logo.png',
          alt: 'Tecnologia Usada',
        },
      ],
    },
    {
      src: 'assets/img/camp-canva.png',
      alt: 'Projeto 4',
      title: 'Well Camp - (IOS)',
      body: 'Site de TCC no curso Instituto da Ooportunida Social (IOS).',
      url:'https://github.com/Ericodesenvolvedor/WellCamp',
      tech: [
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
          alt: 'Tecnologia Usada',
        },
      ],
    },
    {
      src: 'assets/img/cine-canva.png',
      alt: 'Projeto 5',
      title: 'Estudo React.Js - Well Cine',
      body: 'Site desenvolvido em estudo, consumo de uma API com React.Js.',
      url:'https://github.com/Wevertonbarbosa/Filmes-React',
      tech: [
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
          alt: 'Tecnologia Usada',
        },
      ],
    },
    {
      src: 'assets/img/ecommerce-canva.png',
      alt: 'Projeto 6',
      title: 'Ecommerce - Estudos',
      body: 'Site feito em estudo para aprimoramento e aumento do portfólio.',
      url:'https://github.com/Wevertonbarbosa/Projeto-Site_Ecommerce',
      tech: [
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
          alt: 'Tecnologia Usada',
        },
      ],
    },
    {
      src: 'assets/img/splash-food-canva.png',
      alt: 'Projeto 7',
      title: 'App Pizza - (TOTVS)',
      body: 'App desenvolvido no projeto final do programa Start Tech na TOTVS.',
      url:'https://github.com/Wevertonbarbosa/Front-AllForFood',
      tech: [
        {
          imgTech: 'https://img.icons8.com/color/256/ionic.png',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech: 'https://img.icons8.com/color/256/angularjs.png',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech: 'https://img.icons8.com/color/256/typescript.png',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech: 'https://img.icons8.com/color/256/spring-logo.png',
          alt: 'Tecnologia Usada',
        },
      ],
    },
    {
      src: 'assets/img/pokedex-canva.png',
      alt: 'Projeto 8',
      title: 'Pokedex JavaScript - (Ifood)',
      body: 'Pokedex desenvolvido em JavaScript consumindo uma Api, bootcamp da empresa Ifood.',
      url:'https://github.com/Wevertonbarbosa/js-developer-pokedex',
      tech: [
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
          alt: 'Tecnologia Usada',
        },
      ],
    },
    {
      src: 'assets/img/portf-antigo-canva.png',
      alt: 'Projeto 9',
      title: 'Portfólio em React.JS - React.JS',
      body: 'Primeiro portifólio desenvolvido com React.JS.',
      url:'https://github.com/Wevertonbarbosa/Meu-Site',
      tech: [
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
          alt: 'Tecnologia Usada',
        },
      ],
    },
    {
      src: 'assets/img/Java.gif',
      alt: 'Projeto 10',
      title: 'Aplicações Java - Java',
      body: 'Aplicações desenvolvidas em Java em alguns cursos.',
      url:'https://github.com/Wevertonbarbosa/StartTech-JAVA',
      tech: [
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
          alt: 'Tecnologia Usada',
        },
      ],
    },
    {
      src: 'assets/img/Spring_Java.gif',
      alt: 'Projeto 11',
      title: 'Aplicações Spring Boot - Spring Boot',
      body: 'Algumas aplicações em Java com Sping Boot.',
      url:'https://github.com/InaAraujo/ProjetoFinal---Grupo2-',
      tech: [
        {
          imgTech:
            'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
          alt: 'Tecnologia Usada',
        },
        {
          imgTech: 'https://img.icons8.com/color/256/spring-logo.png',
          alt: 'Tecnologia Usada',
        },
      ],
    },
    {
      src: 'assets/img/Sql_Serve.gif',
      alt: 'Projeto 12',
      title: 'Aplicações Sql Server - Sql Server',
      body: 'Estudos de Sql Server n curso da Start tech.',
      url:'https://github.com/Wevertonbarbosa/StartTech-Banco-Dados-Sql',
      tech: [
        {
          imgTech: 'https://img.icons8.com/color/256/microsoft-sql-server.png',
          alt: 'Tecnologia Usada',
        },
      ],
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
