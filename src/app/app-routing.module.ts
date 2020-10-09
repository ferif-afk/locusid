import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "tentang",
    loadChildren: "./page/tentang/tentang.module#TentangPageModule",
  },
  {
    path: "listpromo",
    loadChildren: "./page/listpromo/listpromo.module#ListPromoPageModule",
  },
  {
    path: "detailpromo",
    loadChildren: "./page/detailpromo/detailpromo.module#DetailPromoPageModule",
  },
  {
    path: "listevent",
    loadChildren: "./page/listevent/listevent.module#ListEventPageModule",
  },
  {
    path: "detailevent",
    loadChildren: "./page/detailevent/detailevent.module#DetailEventPageModule",
  },
  {
    path: "listgaleri",
    loadChildren: "./page/listgaleri/listgaleri.module#ListGaleriPageModule",
  },
  {
    path: "detailgaleri",
    loadChildren:
      "./page/detailgaleri/detailgaleri.module#DetailGaleriPageModule",
  },
  {
    path: "detailartikel",
    loadChildren: () =>
      import("./page/detailartikel/detailartikel.module").then(
        (m) => m.DetailartikelPageModule
      ),
  },
  {
    path: "detailmerchant",
    loadChildren: () =>
      import("./page/detailmerchant/detailmerchant.module").then(
        (m) => m.DetailmerchantPageModule
      ),
  },
  {
    path: 'setting',
    loadChildren: () => import('./page/setting/setting.module').then( m => m.SettingPageModule)
  },
  {
    path: "detailmember",
    loadChildren: () =>
      import("./page/detailmember/detailmember.module").then(
        (m) => m.DetailmemberPageModule
      ),
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
