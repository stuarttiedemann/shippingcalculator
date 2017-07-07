import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculatorComponent } from './calculator/calculator.component';
import { AboutComponent } from './about/about.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

const appRoutes: Routes = [
  { path: '', component: CalculatorComponent },
  { path: 'about', component: AboutComponent },
  { path: 'not-found', component: ErrorpageComponent, data: { message: 'Page not found!'}},
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
