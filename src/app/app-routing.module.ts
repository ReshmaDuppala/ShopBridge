import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ContainerComponent } from './container/container.component';


const routes: Routes = [
  { path: 'add', component: ContainerComponent },
  { path: 'details/:id', component: ItemDetailsComponent },
  { path: '', redirectTo: '/add', pathMatch: 'full' },
  { path: '**', redirectTo: '/add' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
