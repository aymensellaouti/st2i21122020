import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FirstComponent } from './components/first/first.component';
import { ColorComponent } from './pages/color/color.component';
import { WordComponent } from './pages/word/word.component';
import { TodoComponent } from './todo/pages/todo/todo.component';
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
        loadChildren: () => import('./cv/cv.module').then((m) => m.CvModule),
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
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
