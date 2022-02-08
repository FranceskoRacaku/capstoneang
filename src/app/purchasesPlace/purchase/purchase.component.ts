import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from '../purchase.service';
import { Purchase } from './purchase.model';
import { Fund } from 'src/app/fundsPlace/fund/fund.model';
import { FundService } from 'src/app/fundsPlace/fund.service';
import { FundComponent } from 'src/app/fundsPlace/fund/fund.component';
import { User } from 'src/app/usersPlace/user/user.model';
import { UserService } from 'src/app/usersPlace/user.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})


export class PurchaseComponent implements OnInit {

  funds: Fund[] =[];

  users: User[] =[];
  purchase:Purchase = {
    id: 0,
    amount: 0,
    fundId: 0,
    userId: '',
  };

  constructor(private route:ActivatedRoute, 
    private purchaseService: PurchaseService,
    private fundService: FundService,
    private userService: UserService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      var myid = +params['id'];
      this.purchaseService.getPurchase(myid).subscribe(payload=>{
        console.log(payload);
        this.purchase = payload;
      })


      this.fundService.getFunds().subscribe(payload=>{
        console.log("This Fund", payload);
        this.funds = payload;
        
      })
    })
  }

  sellFund(id: number){
    if(confirm("Are you sure you want to sell this Fund?") == true){
    this.purchaseService.deletePurchases(id).subscribe(data =>{
      this.router.navigateByUrl(`/users/${this.purchase.userId}`);
      })
    }
    else{
      
    }
    }

    edit():void {
      this.router.navigateByUrl(`/purchases/${this.purchase.id}/edit`);
    }
}
