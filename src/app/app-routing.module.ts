import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { CvComponent } from './cv/cv/cv.component';
import { DetailsPersonneComponent } from './cv/pages/details-personne/details-personne.component';
import { ColorComponent } from './pages/color/color.component';
import { WordComponent } from './pages/word/word.component';
import { TodoComponent } from './todo/pages/todo/todo.component';
import { AddPersonneComponent } from './cv/pages/add-personne/add-personne.component';
import { FrontComponent } from './pages/front/front.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FilsComponent } from './components/fils/fils.component';
import { Nf404Component } from './pages/nf404/nf404.component';
import { LoginComponent } from './pages/login/login.component';

// cv/add
const routes: Routes = [
  {
    path: '',
    component: FrontComponent,
    children: [
      { path: '', component: FirstComponent },
      {
        path: 'cv',
        children: [
          { path: '', component: CvComponent },
          { path: 'add', component: AddPersonneComponent },
          { path: ':id', component: DetailsPersonneComponent },
        ],
      },
      { path: 'login', component: LoginComponent },
      { path: 'todo', component: TodoComponent },
      { path: 'fils', component: FilsComponent },
      { path: 'word', component: WordComponent },
      { path: 'color/:couleur', component: ColorComponent },
      { path: '**', component: Nf404Component },
    ],
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [{ path: 'fils', component: FilsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
