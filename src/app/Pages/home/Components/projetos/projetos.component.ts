import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css','./projetos-query.component.css'],
})
export class ProjetosComponent {
  
  details = [
    {
      sobre: 'Sobre mim',
      content: {
        title: '· Quem sou',
        body:'Sou um jovem sonhador, motivado e com um grande desejo de sempre está vencendo, sempre fui conectado com a tecnologia, mas foi no inicío de 2022 que pensei em trabalhar com a tecnologia, acredito que com a tecnologia podemos mudar o mundo e como as pessoas vivem. Hoje estou como estudante na área da Tecnologia da informação, com objetivo de trabalhar na mesma área. Bolsista em uma das melhores faculdades de tecnologia do Brasil, FIAP.',
      },
    },
    {
      sobre: 'Habilidades',
      content: {
        title: '· Habilidades de programação/Programming Skill:',
        body:'HTML5, CSS3, Bootstrap, JavaScript React.Js, Java, Styled-Components, Angular, Ionic, TypeScript, SQL Serve e Spring Boot. Ferramentas/Tools:Visual Studio Code, Git e Github e IntelliJ IDEA',
      },
    },
    {
      sobre: 'Formação',
      content: {
        title: '· Minhas Formações',
        body: `Formado e participante do projeto Start <Tech> TOTVS, como desenvolvedor Java na maior empresa de tecnologia do Brasil, TOTVS e parceria com Let's code from Ada e formado como Desenvolvedor de Front-end/Web no Instituto da oportunidade social (IOS).`,
      },
    },
    {
      sobre: 'Estudando',
      content: {
        title: '· Atualmente estudando:',
        body:'Sou bolsista em uma das melhores faculdades de tecnologia do País, cursando análise e desenvolvimento de sistemas, ensino superior na FIAP. Estudando programação na Alura e estudando inglês na Alura, Participo de diversos projetos em grupo na faculdade como Challanges, Global Solution, são desafios em que o grupo precisa desenvolver soluções do 0 para empresas parceiras da FIAP.'
      },
    },
  ];

}
