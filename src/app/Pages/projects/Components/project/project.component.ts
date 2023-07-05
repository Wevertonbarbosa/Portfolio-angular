import { Component, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css', 'project.component-query.css'],
})
export class ProjectComponent {
  modalRef?: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  images = [
    {
      src: 'assets/img/blog-slide.gif',
      alt: 'Projeto 1',
      title: 'Blog Ifood - (Ifood)',
      body: 'Blog feito no curso da DIO Innovation, bootcamp da Dio com parceria da empresa Ifood.',
      url: 'https://github.com/Wevertonbarbosa/Blog-Angular-Dio',
      tech: 'Angular, Html5, Css3 e TypeScript',
    },
    {
      src: 'assets/img/BuzzFeed-Grande-slide.gif',
      alt: 'Projeto 2',
      title: 'Quiz Buzz - (Ifood)',
      body: 'Jogo Quiz Buzz feito na DIO Innovation, bootcamp da Dio com parceria da empresa Ifood.',
      url: 'https://github.com/Wevertonbarbosa/quiz-buzzfee-ifood-DIO',
      tech: 'Angular, Html5, Css3 e TypeScript',
    },
    {
      src: 'assets/img/TropaCafé-slide.gif',
      alt: 'Projeto 3',
      title: 'Start Tech - (TOTVS)',
      body: 'App para gestão de comunicação para motoristas de ônibus, projeto feito no programa Start tech na TOTVS, na parte do back-end eu desevolvi uma API e na parte do front-end desenvolvi o designer e consumi a API levando os dados solicitados para o banco de dados H2.',
      url: 'https://github.com/vitorRenan7/Aplicativo-Padrinhos',
      tech: 'Angular, Html5, Css3, TypeScript, Ionic, Java e Spring Boot',
    },
    {
      src: 'assets/img/WellCAMP-slide.gif',
      alt: 'Projeto 4',
      title: 'Well Camp - (IOS)',
      body: 'Este site foi desenvolvido como projeto final de aprovação do curso Instituto da Oportunidade Social (IOS).',
      url: 'https://github.com/Ericodesenvolvedor/WellCamp',
      tech: 'Html5, Css3 e Bootstrap',
    },
    {
      src: 'assets/img/Cine-Grande-slide.gif',
      alt: 'Projeto 5',
      title: 'Estudo React.Js - Well Cine',
      body: 'Site desenvolvido em estudo, desenvolvi este site em uma video aula em que o professor nos ensinava a utilizar os Hooks do React.js, e no final consumimos uma API de filmes.',
      url: 'https://github.com/Wevertonbarbosa/Filmes-React',
      tech: 'React.Js, Html5 e Css3',
    },
    {
      src: 'assets/img/ecommerce-slide.gif',
      alt: 'Projeto 6',
      title: 'Ecommerce - Estudos',
      body: 'Site feito em estudo para aprimoramento e aumento do portfólio.',
      url: 'https://github.com/Wevertonbarbosa/Projeto-Site_Ecommerce',
      tech: 'Html5 e Css3',
    },
    {
      src: 'assets/img/AllForFood-slide.gif',
      alt: 'Projeto 7',
      title: 'App Pizza - (TOTVS)',
      body: 'App que faz a gestão de uma pizzaria, essa foi a ideia que eu e meu time desenvolvemos no projeto final do programa Start Tech na TOTVS, desenvolvemos na parte do Back-end o famoso CRUD para consumir a API na parte do Front-end as informações do cliente e armazená-las no banco H2.',
      url: 'https://github.com/Wevertonbarbosa/Front-AllForFood',
      tech: 'Angular, Html5, Css3, TypeScript, Ionic, Java e Spring Boot',
    },
    {
      src: 'assets/img/pokedex-grande-slide.gif',
      alt: 'Projeto 8',
      title: 'Pokedex JavaScript - (Ifood)',
      body: 'Pokedex desenvolvido em JavaScript consumindo uma Api, bootcamp da Dio com parceria da empresa Ifood.',
      url: 'https://github.com/Wevertonbarbosa/js-developer-pokedex',
      tech: 'Html5, Css3, JavaScript',
    },
    {
      src: 'assets/img/Portfolio-slide.gif',
      alt: 'Projeto 9',
      title: 'Portfólio em React.JS - React.JS',
      body: 'Este site foi meu primeiro portifólio em que foi desenvolvido com React.JS.',
      url: 'https://github.com/Wevertonbarbosa/Meu-Site',
      tech: 'React.Js, Html5 e Css3',
    },
    {
      src: 'assets/img/Java-slide.gif',
      alt: 'Projeto 10',
      title: 'Aplicações Java - Java',
      body: 'Aplicações desenvolvidas em Java para estudos em alguns cursos.',
      url: 'https://github.com/Wevertonbarbosa/StartTech-JAVA',
      tech: 'Java',
    },
    {
      src: 'assets/img/Java-Spring-slide.gif',
      alt: 'Projeto 11',
      title: 'Aplicações Spring Boot - Spring Boot',
      body: 'Algumas aplicações em Java com Spring Boot.',
      url: 'https://github.com/InaAraujo/ProjetoFinal---Grupo2-',
      tech: 'Spring Boot',
    },
    {
      src: 'assets/img/SQLServe-slide.gif',
      alt: 'Projeto 12',
      title: 'Aplicações Sql Server - Sql Server',
      body: 'Estudos de Sql Server no curso da Start tech na TOTVS.',
      url: 'https://github.com/Wevertonbarbosa/StartTech-Banco-Dados-Sql',
      tech: 'Microsoft Sql Server',
    },
  ];
}
