import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/pages/dashboard/dashboard.component';
import { ShoppingCartComponent } from './modules/pages/shopping-cart/shopping-cart.component';
import { NavBarComponent } from './modules/components/nav-bar/nav-bar.component';
import { PageNotFoundComponent } from './modules/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: NavBarComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
    ],
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
