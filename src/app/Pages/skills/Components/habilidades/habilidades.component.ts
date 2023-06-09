import { Component} from '@angular/core';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css', 'habilidades.component-query.css']
})
export class HabilidadesComponent {
  
  skills = [
  {
    linguagem:'HTML 5',
    url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
    value: 90    
  },
  {
    linguagem:'CSS 3',
    url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
    value: 90
  },
  {
    linguagem:'JavaScript',
    url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg',
    value: 70
  },
  {
    linguagem:'React.Js',
    url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
    value: 50
  },
  {
    linguagem:'Angular',
    url:'https://img.icons8.com/color/256/angularjs.png',
    value: 75
  },
  {
    linguagem:'Ionic',
    url:'https://img.icons8.com/color/256/ionic.png',
    value: 80
  },
  {
    linguagem:'TypeScript',
    url:'https://img.icons8.com/color/256/typescript.png',
    value: 70
  },
  {
    linguagem:'SQL Serve',
    url:'https://img.icons8.com/color/256/microsoft-sql-server.png',
    value: 50
  },
  {
    linguagem:'Java',
    url:'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    value: 68
  },
  {
    linguagem:'Spring Boot',
    url:'https://img.icons8.com/color/256/spring-logo.png',
    value: 58
  },
  {
    linguagem:'Styled Components',
    url:'https://miro.medium.com/max/652/1*N0XV3gco7Ed4brMoxwdjVg.png',
    value: 60
  },
  {
    linguagem:'Bootstrap',
    url:'https://toupto.com/wp-content/uploads/2018/07/Bootstrap-Icon.jpg',
    value: 80
  },
  {
    linguagem:'PO UI',
    url:'https://sempreju.com.br/wp-content/uploads/2021/01/48802478.png',
    value: 80
  },
]
}
