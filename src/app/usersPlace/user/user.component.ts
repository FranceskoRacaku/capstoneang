import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from './user.model';
import { PurchaseService } from 'src/app/purchasesPlace/purchase.service';
import { Purchase } from 'src/app/purchasesPlace/purchase/purchase.model';
import { Fund } from 'src/app/fundsPlace/fund/fund.model';
import { FundService } from 'src/app/fundsPlace/fund.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  purchases: Purchase[] =[];

  user: User = {
    id: 0,
    userName: '',
    userEmail: '',
    userAge: 0,
  };

  constructor(private route:ActivatedRoute, 
    private userService: UserService,
    private purchaseService: PurchaseService,
    private fundService: FundService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.userService.getUser(myid).subscribe(payload=>{
        console.log(payload);
        this.user = payload;
      })

      // this.purchases.id = myid
      // console.log("this is the ID", this.purchase.fundId)
      this.purchaseService.getPurchases().subscribe(payload=>{
        console.log("This Fund", payload);
        this.purchases = payload;
        
      })
    })
  }

    edit():void {
      this.router.navigateByUrl(`/users/${this.user.id}/edit`);
    }
}
