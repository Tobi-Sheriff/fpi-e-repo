import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication/authentication.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'message/:id',
    loadChildren: () => import('./view-message/view-message.module').then( m => m.ViewMessagePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./authentication/authentication.module').then( m => m.AuthenticationPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./authentication/authentication.module').then( m => m.AuthenticationPageModule)
  },
  {
    path: 'reset',
    loadChildren: () => import('./authentication/authentication.module').then( m => m.AuthenticationPageModule)
  },
  {
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
  {
    path: 'img-upload',
    loadChildren: () => import('./img-upload/img-upload.module').then( m => m.ImgUploadPageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'create-department',
    loadChildren: () => import('./pages/create-department/create-department.module').then( m => m.CreateDepartmentPageModule)
  },
  {
    path: 'cs-nd1',
    loadChildren: () => import('./pages/cs/nd1/nd1.module').then( m => m.Nd1PageModule)
  },
  {
    path: 'cs-nd2',
    loadChildren: () => import('./pages/cs/nd2/nd2.module').then( m => m.Nd2PageModule)
  },
  {
    path: 'cs-hnd1',
    loadChildren: () => import('./pages/cs/hnd1/hnd1.module').then( m => m.Hnd1PageModule)
  },
  {
    path: 'cs-hnd2',
    loadChildren: () => import('./pages/cs/hnd2/hnd2.module').then( m => m.Hnd2PageModule)
  },
  {
    path: 'slt-nd1',
    loadChildren: () => import('./pages/slt/nd1/nd1.module').then( m => m.Nd1PageModule)
  },
  {
    path: 'slt-nd2',
    loadChildren: () => import('./pages/slt/nd2/nd2.module').then( m => m.Nd2PageModule)
  },
  {
    path: 'slt-hnd1',
    loadChildren: () => import('./pages/slt/hnd1/hnd1.module').then( m => m.Hnd1PageModule)
  },
  {
    path: 'slt-hnd2',
    loadChildren: () => import('./pages/slt/hnd2/hnd2.module').then( m => m.Hnd2PageModule)
  },
  {
    path: 'ft-nd1',
    loadChildren: () => import('./pages/ft/nd1/nd1.module').then( m => m.Nd1PageModule)
  },
  {
    path: 'ft-nd2',
    loadChildren: () => import('./pages/ft/nd2/nd2.module').then( m => m.Nd2PageModule)
  },
  {
    path: 'ft-hnd1',
    loadChildren: () => import('./pages/ft/hnd1/hnd1.module').then( m => m.Hnd1PageModule)
  },
  {
    path: 'ft-hnd2',
    loadChildren: () => import('./pages/ft/hnd2/hnd2.module').then( m => m.Hnd2PageModule)
  },
  {
    path: 'u-cs-nd1',
    loadChildren: () => import('./pages/u-cs/nd1/nd1.module').then( m => m.Nd1PageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'u-cs-nd2',
    loadChildren: () => import('./pages/u-cs/nd2/nd2.module').then( m => m.Nd2PageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'u-cs-hnd1',
    loadChildren: () => import('./pages/u-cs/hnd1/hnd1.module').then( m => m.Hnd1PageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'u-cs-hnd2',
    loadChildren: () => import('./pages/u-cs/hnd2/hnd2.module').then( m => m.Hnd2PageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'u-slt-nd1',
    loadChildren: () => import('./pages/u-slt/nd1/nd1.module').then( m => m.Nd1PageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'u-slt-nd2',
    loadChildren: () => import('./pages/u-slt/nd2/nd2.module').then( m => m.Nd2PageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'u-slt-hnd1',
    loadChildren: () => import('./pages/u-slt/hnd1/hnd1.module').then( m => m.Hnd1PageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'u-slt-hnd2',
    loadChildren: () => import('./pages/u-slt/hnd2/hnd2.module').then( m => m.Hnd2PageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'u-ft-nd1',
    loadChildren: () => import('./pages/u-ft/nd1/nd1.module').then( m => m.Nd1PageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'u-ft-nd2',
    loadChildren: () => import('./pages/u-ft/nd2/nd2.module').then( m => m.Nd2PageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'u-ft-hnd1',
    loadChildren: () => import('./pages/u-ft/hnd1/hnd1.module').then( m => m.Hnd1PageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'u-ft-hnd2',
    loadChildren: () => import('./pages/u-ft/hnd2/hnd2.module').then( m => m.Hnd2PageModule),
    canActivate: [AuthenticationGuard]
  },
  // {
  //   path: 'authentication',
  //   loadChildren: () => import('./authentication/authentication.module').then( m => m.AuthenticationPageModule)
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
