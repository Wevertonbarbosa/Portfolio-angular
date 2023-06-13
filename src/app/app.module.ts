import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// NGX-BOOTSTRAP
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';


import { HabilidadesModule } from './Pages/skills/Components/habilidades.module';
import { AppComponent } from './app.component';
import { CardNomeComponent } from './Pages/home/Components/card-nome/card-nome.component';
import { CurriculoComponent } from './Pages/home/Components/curriculo/curriculo.component';
import { LinksComponent } from './Pages/home/Components/links/links.component';
import { ProjetosComponent } from './Pages/home/Components/projetos/projetos.component';
import { SlideProjectComponent } from './Pages/home/Components/slide-project/slide-project.component';
import { WelcomeComponent } from './Pages/home/Components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    CardNomeComponent,
    CurriculoComponent,
    LinksComponent,
    ProjetosComponent,
    SlideProjectComponent,
    WelcomeComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    HabilidadesModule,
    TabsModule.forRoot(),    
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
