import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { MenuComponent } from './menu/menu.component';

//NGX-BOOTSTRAP
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CarouselComponent } from './carousel/carousel.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ProjectComponent } from '../../projects/Components/project/project.component';



@NgModule({
  declarations: [
    HabilidadesComponent,
    MenuComponent,
    CarouselComponent, 
    ExperienciaComponent,
    ProjectComponent
  ],
  exports:[HabilidadesComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),    
    ModalModule.forRoot(),
  ]
})
export class HabilidadesModule { }
