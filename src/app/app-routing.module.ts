import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateComponent } from './pages/template/template.component';
import { RectiveComponent } from './pages/rective/rective.component';

const routes: Routes = [
  {path: 'template', component: TemplateComponent},
  {path: 'reactive', component: RectiveComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'template'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
