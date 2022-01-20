import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FundsComponent } from './funds/funds.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { UsersComponent } from './users/users.component';
import { FundComponent } from './fund/fund.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FundsComponent,
    PurchasesComponent,
    UsersComponent,
    FundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
