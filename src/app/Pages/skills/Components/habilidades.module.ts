import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { MenuComponent } from './menu/menu.component';

//NGX-BOOTSTRAP
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { CarouselComponent } from './carousel/carousel.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    HabilidadesComponent,
    MenuComponent,
    CarouselComponent, 
    ExperienciaComponent,
  ],
  exports:[HabilidadesComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    CarouselModule.forRoot()    
  ]
})
export class HabilidadesModule { }
