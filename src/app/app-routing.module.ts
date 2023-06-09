import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadesComponent } from './Pages/skills/Components/habilidades/habilidades.component';
import { CardNomeComponent } from './Pages/home/Components/card-nome/card-nome.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CardNomeComponent,
  },
  {
    path: 'habilidades',
    component: HabilidadesComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
