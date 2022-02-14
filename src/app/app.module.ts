import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UsersComponent } from './usersPlace/users/users.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UserComponent } from './usersPlace/user/user.component';
import { CreateUsersComponent } from './usersPlace/createusers/createusers.component';
import { EditUsersComponent } from './usersPlace/editusers/editusers.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginUsersComponent } from './usersPlace/loginusers/loginusers.component';
import { UserpComponent } from './usersPlace/userProfile/userp.component';
import { HomeComponent } from './home/home.component';

//Closed-End Funds Imports
import { EditFundsComponent } from './fundsPlace/editfunds/editfunds.component';
import { CreateFundsComponent } from './fundsPlace/createfunds/createfunds.component';
import { FundsComponent } from './fundsPlace/funds/funds.component';
import { FundComponent } from './fundsPlace/fund/fund.component';
import { SortDirective } from './directive/sort.directive';
import { CefComponent } from './cefProfile/cef.component';

//CEF Purchases
import { PurchasesComponent } from './purchasesPlace/purchases/purchases.component';
import { CreatePurchasesComponent } from './purchasesPlace/createpurchases/createpurchases.component';
import { PurchaseComponent } from './purchasesPlace/purchase/purchase.component';

//CEF Sells
import { CefSellComponent } from './cefSellProfile/cefSell/cefSell.component';
import { CefCreateSellsComponent } from './cefSellProfile/cefCreateSells/cefCreateSells.component';


@NgModule({
  declarations: [
    AppComponent,
    FundsComponent,
    PurchasesComponent,
    UsersComponent,
    FundComponent,
    PurchaseComponent,
    UserComponent,
    CreateUsersComponent,
    EditUsersComponent,
    CreatePurchasesComponent,
    EditFundsComponent,
    CreateFundsComponent,
    SortDirective,
    LoginUsersComponent,
    UserpComponent,
    HomeComponent,
    CefSellComponent,
    CefCreateSellsComponent,
    CefComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
