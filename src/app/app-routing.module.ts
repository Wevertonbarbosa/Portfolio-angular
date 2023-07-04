import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HabilidadesComponent } from './Pages/skills/Components/habilidades/habilidades.component';
import { CardNomeComponent } from './Pages/home/Components/card-nome/card-nome.component';
import { ProjectComponent } from './Pages/projects/Components/project/project.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CardNomeComponent,
  },
  {
    path: 'habilidades',
    component: HabilidadesComponent,
  },
  {
    path: 'project',
    component: ProjectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
