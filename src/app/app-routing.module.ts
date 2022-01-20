import { NgModule } from '@angular/core';
import { FundComponent } from './fund/fund.component';
import { FundsComponent } from './funds/funds.component';
// import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';
// import { EditFundsComponent } from './editfunds/editfunds.component';

const routes: Routes = [
  {path: "funds", component: FundsComponent},
//   {path: "funds/create", component: CreateComponent},
  {path: "funds/:id", component: FundComponent},
//   {path: "loans/:id/edit", component: EditFundsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
