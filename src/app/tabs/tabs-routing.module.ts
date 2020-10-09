import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'beranda',
        loadChildren: () => import('./beranda/beranda.module').then(m => m.BerandaPageModule)
      },
      {
        path: 'merchant',
        loadChildren: () => import('./merchant/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'artikel',
        loadChildren: () => import('./artikel/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'profil',
        loadChildren: () => import('./profil/tab3.module').then(m => m.Tab3PageModule)
      },
      {
        path: 'listmember',
        loadChildren: () => import('./listmember/listmember.module').then(m => m.ListmemberPageModule)
      },
      {
        path: 'member',
        loadChildren: () => import('./member/member.module').then(m => m.MemberPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/beranda',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/beranda',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
