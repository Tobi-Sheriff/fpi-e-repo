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
    path: 'img-upload',
    loadChildren: () => import('./img-upload/img-upload.module').then( m => m.ImgUploadPageModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'create-department',
    loadChildren: () => import('./pages/create-department/create-department.module').then( m => m.CreateDepartmentPageModule)
  },
  {
    path: 'cs-nd2',
    loadChildren: () => import('./pages/cs/nd2/nd2.module').then( m => m.Nd2PageModule)
  },
  {
    path: 'slt-nd2',
    loadChildren: () => import('./pages/slt/nd2/nd2.module').then( m => m.Nd2PageModule)
  },
  {
    path: 'ft-nd2',
    loadChildren: () => import('./pages/ft/nd2/nd2.module').then( m => m.Nd2PageModule)
  },
  // {
  //   path: 'u-cs-hnd2',
  //   loadChildren: () => import('./pages/u-cs/hnd2/hnd2.module').then( m => m.Hnd2PageModule),
  //   canActivate: [AuthenticationGuard]
  // },
  {
    path: 'cs-nd1-fs-2022',
    loadChildren: () => import('./pages/cs/2022/nd1-fs/nd1-fs.module').then( m => m.Nd1FsPageModule)
  },
  {
    path: 'cs-nd1-fs-2021',
    loadChildren: () => import('./pages/cs/2021/nd1-fs/nd1-fs.module').then( m => m.Nd1FsPageModule)
  },
  {
    path: 'cs-nd1-fs-2020',
    loadChildren: () => import('./pages/cs/2020/nd1-fs/nd1-fs.module').then( m => m.Nd1FsPageModule)
  },
  {
    path: 'cs-nd1-ss-2020',
    loadChildren: () => import('./pages/cs/2020/nd1-ss/nd1-ss.module').then( m => m.Nd1SsPageModule)
  },
  {
    path: 'nd1-ss',
    loadChildren: () => import('./pages/cs/2021/nd1-ss/nd1-ss.module').then( m => m.Nd1SsPageModule)
  },
  {
    path: 'cs-nd1-ss-2022',
    loadChildren: () => import('./pages/cs/2022/nd1-ss/nd1-ss.module').then( m => m.Nd1SsPageModule)
  },
  {
    path: 'cs-nd2-ss-2022',
    loadChildren: () => import('./pages/cs/2022/nd2-ss/nd2-ss.module').then( m => m.Nd2SsPageModule)
  },
  {
    path: 'cs-nd2-fs-2022',
    loadChildren: () => import('./pages/cs/2022/nd2-fs/nd2-fs.module').then( m => m.Nd2FsPageModule)
  },
  {
    path: 'nd2-fs',
    loadChildren: () => import('./pages/cs/2021/nd2-fs/nd2-fs.module').then( m => m.Nd2FsPageModule)
  },
  {
    path: 'nd2-ss',
    loadChildren: () => import('./pages/cs/2021/nd2-ss/nd2-ss.module').then( m => m.Nd2SsPageModule)
  },
  {
    path: 'cs-nd2-ss-2020',
    loadChildren: () => import('./pages/cs/2020/nd2-ss/nd2-ss.module').then( m => m.Nd2SsPageModule)
  },
  {
    path: 'cs-nd2-fs-2020',
    loadChildren: () => import('./pages/cs/2020/nd2-fs/nd2-fs.module').then( m => m.Nd2FsPageModule)
  },
  {
    path: 'cs-hnd1-fs-2020',
    loadChildren: () => import('./pages/cs/2020/hnd1-fs/hnd1-fs.module').then( m => m.Hnd1FsPageModule)
  },
  {
    path: 'cs-hnd1-ss-2020',
    loadChildren: () => import('./pages/cs/2020/hnd1-ss/hnd1-ss.module').then( m => m.Hnd1SsPageModule)
  },
  {
    path: 'hnd1-ss',
    loadChildren: () => import('./pages/cs/2021/hnd1-ss/hnd1-ss.module').then( m => m.Hnd1SsPageModule)
  },
  {
    path: 'hnd1-fs',
    loadChildren: () => import('./pages/cs/2021/hnd1-fs/hnd1-fs.module').then( m => m.Hnd1FsPageModule)
  },
  {
    path: 'cs-hnd1-fs-2022',
    loadChildren: () => import('./pages/cs/2022/hnd1-fs/hnd1-fs.module').then( m => m.Hnd1FsPageModule)
  },
  {
    path: 'cs-hnd1-ss-2022',
    loadChildren: () => import('./pages/cs/2022/hnd1-ss/hnd1-ss.module').then( m => m.Hnd1SsPageModule)
  },
  {
    path: 'cs-hnd2-ss-2022',
    loadChildren: () => import('./pages/cs/2022/hnd2-ss/hnd2-ss.module').then( m => m.Hnd2SsPageModule)
  },
  {
    path: 'cs-hnd2-fs-2022',
    loadChildren: () => import('./pages/cs/2022/hnd2-fs/hnd2-fs.module').then( m => m.Hnd2FsPageModule)
  },
  {
    path: 'cs-hnd2-fs-2021',
    loadChildren: () => import('./pages/cs/2021/hnd2-fs/hnd2-fs.module').then( m => m.Hnd2FsPageModule)
  },
  {
    path: 'cs-hnd2-ss-2021',
    loadChildren: () => import('./pages/cs/2021/hnd2-ss/hnd2-ss.module').then( m => m.Hnd2SsPageModule)
  },
  {
    path: 'cs-hnd2-ss-2020',
    loadChildren: () => import('./pages/cs/2020/hnd2-ss/hnd2-ss.module').then( m => m.Hnd2SsPageModule)
  },
  {
    path: 'cs-hnd2-fs-2020',
    loadChildren: () => import('./pages/cs/2020/hnd2-fs/hnd2-fs.module').then( m => m.Hnd2FsPageModule)
  },
  {
    path: 'u-cs-hnd1-fs',
    loadChildren: () => import('./pages/u-cs/hnd1-fs/hnd1-fs.module').then( m => m.Hnd1FsPageModule)
  },
  {
    path: 'u-cs-hnd1-ss',
    loadChildren: () => import('./pages/u-cs/hnd1-ss/hnd1-ss.module').then( m => m.Hnd1SsPageModule)
  },
  {
    path: 'u-cs-hnd2-ss',
    loadChildren: () => import('./pages/u-cs/hnd2-ss/hnd2-ss.module').then( m => m.Hnd2SsPageModule)
  },
  {
    path: 'u-cs-hnd2-fs',
    loadChildren: () => import('./pages/u-cs/hnd2-fs/hnd2-fs.module').then( m => m.Hnd2FsPageModule)
  },
  {
    path: 'u-cs-nd2-fs',
    loadChildren: () => import('./pages/u-cs/nd2-fs/nd2-fs.module').then( m => m.Nd2FsPageModule)
  },
  {
    path: 'u-cs-nd2-ss',
    loadChildren: () => import('./pages/u-cs/nd2-ss/nd2-ss.module').then( m => m.Nd2SsPageModule)
  },
  {
    path: 'u-cs-nd1-ss',
    loadChildren: () => import('./pages/u-cs/nd1-ss/nd1-ss.module').then( m => m.Nd1SsPageModule)
  },
  {
    path: 'u-cs-nd1-fs',
    loadChildren: () => import('./pages/u-cs/nd1-fs/nd1-fs.module').then( m => m.Nd1FsPageModule)
  },
  {
    path: 'nd1-fs',
    loadChildren: () => import('./pages/u-ft/nd1-fs/nd1-fs.module').then( m => m.Nd1FsPageModule)
  },
  {
    path: 'nd1-ss',
    loadChildren: () => import('./pages/u-ft/nd1-ss/nd1-ss.module').then( m => m.Nd1SsPageModule)
  },
  {
    path: 'nd2-fs',
    loadChildren: () => import('./pages/u-ft/nd2-fs/nd2-fs.module').then( m => m.Nd2FsPageModule)
  },
  {
    path: 'nd2-ss',
    loadChildren: () => import('./pages/u-ft/nd2-ss/nd2-ss.module').then( m => m.Nd2SsPageModule)
  },
  {
    path: 'hnd1-fs',
    loadChildren: () => import('./pages/u-ft/hnd1-fs/hnd1-fs.module').then( m => m.Hnd1FsPageModule)
  },
  {
    path: 'hnd1-ss',
    loadChildren: () => import('./pages/u-ft/hnd1-ss/hnd1-ss.module').then( m => m.Hnd1SsPageModule)
  },
  {
    path: 'hnd2-fs',
    loadChildren: () => import('./pages/u-ft/hnd2-fs/hnd2-fs.module').then( m => m.Hnd2FsPageModule)
  },
  {
    path: 'hnd2-ss',
    loadChildren: () => import('./pages/u-ft/hnd2-ss/hnd2-ss.module').then( m => m.Hnd2SsPageModule)
  },
  {
    path: 'nd1-fs',
    loadChildren: () => import('./pages/u-slt/nd1-fs/nd1-fs.module').then( m => m.Nd1FsPageModule)
  },
  {
    path: 'nd1-ss',
    loadChildren: () => import('./pages/u-slt/nd1-ss/nd1-ss.module').then( m => m.Nd1SsPageModule)
  },
  {
    path: 'nd2-fs',
    loadChildren: () => import('./pages/u-slt/nd2-fs/nd2-fs.module').then( m => m.Nd2FsPageModule)
  },
  {
    path: 'nd2-ss',
    loadChildren: () => import('./pages/u-slt/nd2-ss/nd2-ss.module').then( m => m.Nd2SsPageModule)
  },
  {
    path: 'hnd1-fs',
    loadChildren: () => import('./pages/u-slt/hnd1-fs/hnd1-fs.module').then( m => m.Hnd1FsPageModule)
  },
  {
    path: 'hnd1-ss',
    loadChildren: () => import('./pages/u-slt/hnd1-ss/hnd1-ss.module').then( m => m.Hnd1SsPageModule)
  },
  {
    path: 'u-slt-hnd2-fs',
    loadChildren: () => import('./pages/u-slt/hnd2-fs/hnd2-fs.module').then( m => m.Hnd2FsPageModule)
  },
  {
    path: 'u-slt-hnd2-ss',
    loadChildren: () => import('./pages/u-slt/hnd2-ss/hnd2-ss.module').then( m => m.Hnd2SsPageModule)
  },
  {
    path: 'nd1-fs',
    loadChildren: () => import('./pages/ft/2020/nd1-fs/nd1-fs.module').then( m => m.Nd1FsPageModule)
  },
  {
    path: 'nd1-ss',
    loadChildren: () => import('./pages/ft/2020/nd1-ss/nd1-ss.module').then( m => m.Nd1SsPageModule)
  },
  {
    path: 'nd2-fs',
    loadChildren: () => import('./pages/ft/2020/nd2-fs/nd2-fs.module').then( m => m.Nd2FsPageModule)
  },
  {
    path: 'nd2-ss',
    loadChildren: () => import('./pages/ft/2020/nd2-ss/nd2-ss.module').then( m => m.Nd2SsPageModule)
  },
  {
    path: 'hnd1-fs',
    loadChildren: () => import('./pages/ft/2020/hnd1-fs/hnd1-fs.module').then( m => m.Hnd1FsPageModule)
  },
  {
    path: 'hnd1-ss',
    loadChildren: () => import('./pages/ft/2020/hnd1-ss/hnd1-ss.module').then( m => m.Hnd1SsPageModule)
  },
  {
    path: 'hnd2-fs',
    loadChildren: () => import('./pages/ft/2020/hnd2-fs/hnd2-fs.module').then( m => m.Hnd2FsPageModule)
  },
  {
    path: 'hnd2-ss',
    loadChildren: () => import('./pages/ft/2020/hnd2-ss/hnd2-ss.module').then( m => m.Hnd2SsPageModule)
  },
  {
    path: 'nd1-fs',
    loadChildren: () => import('./pages/ft/2021/nd1-fs/nd1-fs.module').then( m => m.Nd1FsPageModule)
  },
  {
    path: 'nd1-ss',
    loadChildren: () => import('./pages/ft/2021/nd1-ss/nd1-ss.module').then( m => m.Nd1SsPageModule)
  },
  {
    path: 'nd2-fs',
    loadChildren: () => import('./pages/ft/2021/nd2-fs/nd2-fs.module').then( m => m.Nd2FsPageModule)
  },
  {
    path: 'nd2-ss',
    loadChildren: () => import('./pages/ft/2021/nd2-ss/nd2-ss.module').then( m => m.Nd2SsPageModule)
  },
  {
    path: 'hnd1-fs',
    loadChildren: () => import('./pages/ft/2021/hnd1-fs/hnd1-fs.module').then( m => m.Hnd1FsPageModule)
  },
  {
    path: 'hnd1-ss',
    loadChildren: () => import('./pages/ft/2021/hnd1-ss/hnd1-ss.module').then( m => m.Hnd1SsPageModule)
  },
  {
    path: 'hnd2-fs',
    loadChildren: () => import('./pages/ft/2021/hnd2-fs/hnd2-fs.module').then( m => m.Hnd2FsPageModule)
  },
  {
    path: 'hnd2-ss',
    loadChildren: () => import('./pages/ft/2021/hnd2-ss/hnd2-ss.module').then( m => m.Hnd2SsPageModule)
  },
  {
    path: 'nd1-fs',
    loadChildren: () => import('./pages/ft/2022/nd1-fs/nd1-fs.module').then( m => m.Nd1FsPageModule)
  },
  {
    path: 'nd1-ss',
    loadChildren: () => import('./pages/ft/2022/nd1-ss/nd1-ss.module').then( m => m.Nd1SsPageModule)
  },
  {
    path: 'nd2-fs',
    loadChildren: () => import('./pages/ft/2022/nd2-fs/nd2-fs.module').then( m => m.Nd2FsPageModule)
  },
  {
    path: 'nd2-ss',
    loadChildren: () => import('./pages/ft/2022/nd2-ss/nd2-ss.module').then( m => m.Nd2SsPageModule)
  },
  {
    path: 'hnd1-fs',
    loadChildren: () => import('./pages/ft/2022/hnd1-fs/hnd1-fs.module').then( m => m.Hnd1FsPageModule)
  },
  {
    path: 'hnd1-ss',
    loadChildren: () => import('./pages/ft/2022/hnd1-ss/hnd1-ss.module').then( m => m.Hnd1SsPageModule)
  },
  {
    path: 'hnd2-fs',
    loadChildren: () => import('./pages/ft/2022/hnd2-fs/hnd2-fs.module').then( m => m.Hnd2FsPageModule)
  },
  {
    path: 'hnd2-ss',
    loadChildren: () => import('./pages/ft/2022/hnd2-ss/hnd2-ss.module').then( m => m.Hnd2SsPageModule)
  },
  {
    path: 'nd1-fs',
    loadChildren: () => import('./pages/slt/2020/nd1-fs/nd1-fs.module').then( m => m.Nd1FsPageModule)
  },
  {
    path: 'nd1-ss',
    loadChildren: () => import('./pages/slt/2020/nd1-ss/nd1-ss.module').then( m => m.Nd1SsPageModule)
  },
  {
    path: 'nd2-fs',
    loadChildren: () => import('./pages/slt/2020/nd2-fs/nd2-fs.module').then( m => m.Nd2FsPageModule)
  },
  {
    path: 'nd2-ss',
    loadChildren: () => import('./pages/slt/2020/nd2-ss/nd2-ss.module').then( m => m.Nd2SsPageModule)
  },
  {
    path: 'hnd1-fs',
    loadChildren: () => import('./pages/slt/2020/hnd1-fs/hnd1-fs.module').then( m => m.Hnd1FsPageModule)
  },
  {
    path: 'hnd1-ss',
    loadChildren: () => import('./pages/slt/2020/hnd1-ss/hnd1-ss.module').then( m => m.Hnd1SsPageModule)
  },
  {
    path: 'hnd2-fs',
    loadChildren: () => import('./pages/slt/2020/hnd2-fs/hnd2-fs.module').then( m => m.Hnd2FsPageModule)
  },
  {
    path: 'hnd2-ss',
    loadChildren: () => import('./pages/slt/2020/hnd2-ss/hnd2-ss.module').then( m => m.Hnd2SsPageModule)
  },
  {
    path: 'nd1-fs',
    loadChildren: () => import('./pages/slt/2021/nd1-fs/nd1-fs.module').then( m => m.Nd1FsPageModule)
  },
  {
    path: 'nd1-ss',
    loadChildren: () => import('./pages/slt/2021/nd1-ss/nd1-ss.module').then( m => m.Nd1SsPageModule)
  },
  {
    path: 'nd2-fs',
    loadChildren: () => import('./pages/slt/2021/nd2-fs/nd2-fs.module').then( m => m.Nd2FsPageModule)
  },
  {
    path: 'nd2-ss',
    loadChildren: () => import('./pages/slt/2021/nd2-ss/nd2-ss.module').then( m => m.Nd2SsPageModule)
  },
  {
    path: 'hnd1-fs',
    loadChildren: () => import('./pages/slt/2021/hnd1-fs/hnd1-fs.module').then( m => m.Hnd1FsPageModule)
  },
  {
    path: 'hnd1-ss',
    loadChildren: () => import('./pages/slt/2021/hnd1-ss/hnd1-ss.module').then( m => m.Hnd1SsPageModule)
  },
  {
    path: 'hnd2-fs',
    loadChildren: () => import('./pages/slt/2021/hnd2-fs/hnd2-fs.module').then( m => m.Hnd2FsPageModule)
  },
  {
    path: 'hnd2-ss',
    loadChildren: () => import('./pages/slt/2021/hnd2-ss/hnd2-ss.module').then( m => m.Hnd2SsPageModule)
  },
  {
    path: 'nd1-fs',
    loadChildren: () => import('./pages/slt/2022/nd1-fs/nd1-fs.module').then( m => m.Nd1FsPageModule)
  },
  {
    path: 'nd1-ss',
    loadChildren: () => import('./pages/slt/2022/nd1-ss/nd1-ss.module').then( m => m.Nd1SsPageModule)
  },
  {
    path: 'nd2-fs',
    loadChildren: () => import('./pages/slt/2022/nd2-fs/nd2-fs.module').then( m => m.Nd2FsPageModule)
  },
  {
    path: 'nd2-ss',
    loadChildren: () => import('./pages/slt/2022/nd2-ss/nd2-ss.module').then( m => m.Nd2SsPageModule)
  },
  {
    path: 'hnd1-fs',
    loadChildren: () => import('./pages/slt/2022/hnd1-fs/hnd1-fs.module').then( m => m.Hnd1FsPageModule)
  },
  {
    path: 'hnd1-ss',
    loadChildren: () => import('./pages/slt/2022/hnd1-ss/hnd1-ss.module').then( m => m.Hnd1SsPageModule)
  },
  {
    path: 'slt-hnd2-fs-2022',
    loadChildren: () => import('./pages/slt/2022/hnd2-fs/hnd2-fs.module').then( m => m.Hnd2FsPageModule)
  },
  {
    path: 'slt-hnd2-ss-2022',
    loadChildren: () => import('./pages/slt/2022/hnd2-ss/hnd2-ss.module').then( m => m.Hnd2SsPageModule)
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
