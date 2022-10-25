import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'year',
    loadChildren: () => import('./year/year.module').then( m => m.YearPageModule)
  },
  {
    path: 'year1',
    loadChildren: () => import('./year1/year1.module').then( m => m.Year1PageModule)
  },
  {
    path: 'year2',
    loadChildren: () => import('./year2/year2.module').then( m => m.Year2PageModule)
  },
  {
    path: 'year3',
    loadChildren: () => import('./year3/year3.module').then( m => m.Year3PageModule)
  },
  {
    path: 'year4',
    loadChildren: () => import('./year4/year4.module').then( m => m.Year4PageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
