import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForTodayComponent } from './pages/for-today/for-today.component';
import { InProgressComponent } from './pages/in-progress/in-progress.component';
import { AllComponent } from './pages/all/all.component';

const routes: Routes = [
  { path: "fortoday", component: ForTodayComponent},
  { path: "", component:ForTodayComponent, pathMatch: 'full'},
  { path: "inprogress", component: InProgressComponent},
  { path: "all", component: AllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
