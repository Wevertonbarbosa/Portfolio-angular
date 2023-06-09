import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { MenuComponent } from './menu/menu.component';

import { CarouselComponent } from './carousel/carousel.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    HabilidadesComponent,
    MenuComponent,
    CarouselComponent, 
    ExperienciaComponent
  ],
  exports:[HabilidadesComponent],
  imports: [
    CommonModule,
    AppRoutingModule    
  ]
})
export class HabilidadesModule { }
