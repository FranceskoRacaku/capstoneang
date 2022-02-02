import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FundComponent } from './fundsPlace/fund/fund.component';
import { FundsComponent } from './fundsPlace/funds/funds.component';
import { CreateFundsComponent } from './fundsPlace/createfunds/createfunds.component';
import { EditFundsComponent } from './fundsPlace/editfunds/editfunds.component';
import { PurchaseComponent } from './purchasesPlace/purchase/purchase.component';
import { PurchasesComponent } from './purchasesPlace/purchases/purchases.component';
import { CreatePurchasesComponent } from './purchasesPlace/createpurchases/createpurchases.component';
import { UsersComponent } from './usersPlace/users/users.component';
import { UserComponent } from './usersPlace/user/user.component';
import { CreateUsersComponent } from './usersPlace/createusers/createusers.component';
import { EditUsersComponent } from './usersPlace/editusers/editusers.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "funds", component: FundsComponent},
  {path: "funds/create", component: CreateFundsComponent},
  {path: "funds/:id", component: FundComponent},
  {path: "funds/:id/edit", component: EditFundsComponent},
  {path: "funds/:id/create", component: CreatePurchasesComponent},
  {path: "purchases", component: PurchasesComponent},
  {path: "purchases/:id", component: PurchaseComponent},
  // {path: "purchases/:id/edit", component: EditPurchasesComponent},
  {path: "users", component: UsersComponent},
  {path: "users/create", component: CreateUsersComponent},
  {path: "users/:id", component: UserComponent},
  {path: "users/:id/edit", component: EditUsersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
