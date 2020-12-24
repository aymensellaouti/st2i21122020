import { NgModule } from '@angular/core';
import { DefaultImagePipe } from './pipes/default-image.pipe';
import { CvComponent } from './cv/cv.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { CardComponent } from './card/card.component';
import { EmbaucheComponent } from './embauche/embauche.component';
import { DetailsPersonneComponent } from './pages/details-personne/details-personne.component';
import { AddPersonneComponent } from './pages/add-personne/add-personne.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuardGuard } from '../guards/auth-guard.guard';
@NgModule({
  declarations: [
    DetailsPersonneComponent,
    AddPersonneComponent,
    DefaultImagePipe,
    CvComponent,
    ListComponent,
    ItemComponent,
    CardComponent,
    EmbaucheComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'cv',
        children: [
          { path: '', component: CvComponent },
          {
            path: 'add',
            component: AddPersonneComponent,
            canActivate: [AuthGuardGuard],
          },
          { path: ':id', component: DetailsPersonneComponent },
        ],
      },
    ]),
  ],
  exports: [],
  providers: [],
})
export class CvModule {}
