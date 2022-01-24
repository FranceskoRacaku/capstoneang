import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FundsComponent } from './fundsPlace/funds/funds.component';
import { PurchasesComponent } from './purchasesPlace/purchases/purchases.component';
import { UsersComponent } from './usersPlace/users/users.component';
import { FundComponent } from './fundsPlace/fund/fund.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { PurchaseComponent } from './purchasesPlace/purchase/purchase.component';
import { UserComponent } from './usersPlace/user/user.component';
import { CreateuserComponent } from './usersPlace/createuser/createuser.component';
import { EdituserComponent } from './usersPlace/edituser/edituser.component';
import { CreatepurchasesComponent } from './purchasesPlace/createpurchases/createpurchases.component';
import { EditFundsComponent } from './fundsPlace/editfunds/editfunds.component';
import { CreateFundsComponent } from './fundsPlace/createfunds/createfunds.component';

@NgModule({
  declarations: [
    AppComponent,
    FundsComponent,
    PurchasesComponent,
    UsersComponent,
    FundComponent,
    PurchaseComponent,
    UserComponent,
    CreateuserComponent,
    EdituserComponent,
    CreatepurchasesComponent,
    EditFundsComponent,
    CreateFundsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
