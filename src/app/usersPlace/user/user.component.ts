import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  purchase: Purchase = {
    id: 0,
    amount: 0,
    userId: '',
    fundId: 0
  };
  user: User = {
    id: '',
    userName: '',
    userEmail: '',
    userAge: 0,
  };

  users: any={}
  userName: string = '';
  userEmail: string = '';

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
      
      this.purchaseService.getPurchasesByUser(myid).subscribe(payload=>{
        this.purchases = payload;
        console.log("purchase", payload)
      })
    
    })
  }


    edit():void {
      this.router.navigateByUrl(`/users/${this.user.id}/edit`);
    }
}
