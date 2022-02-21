import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterModule,
  Routes,
} from '@angular/router';
import { GoalComponent } from './goal/goal.component';
import { VisitComponent } from './visit/visit.component';
import { FooterCmp } from './footer/footer.component';
import { Footer1 } from './footer1/footer1.component';
import { Footer2 } from './footer2/footer2.component';

import { AtcComponent } from './atc/atc.component';

export const routes: Routes = [
  { path: '', redirectTo: 'atc/1', pathMatch: 'full' },
  {
    path: 'atc/:atcId',
    component: AtcComponent,
    children: [
      { path: '', redirectTo: 'goal', pathMatch: 'full' },
      { path: 'goal', component: GoalComponent },
      { path: 'visit', component: VisitComponent },
    ],
  },
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  declarations: [
    AppComponent,
    AtcComponent,
    GoalComponent,
    VisitComponent,
    AtcComponent,
    Footer2,
    Footer1,
    FooterCmp,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
