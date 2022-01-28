import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Purchase } from '../purchase/purchase.model';
import { PurchaseService } from 'src/app/purchasesPlace/purchase.service';


@Component({
  selector: 'app-createpurchases',
  templateUrl: './createpurchases.component.html',
  styleUrls: ['./createpurchases.component.scss']
})
export class CreatePurchasesComponent implements OnInit {


  createPurchase: any ={
    amount: '',
    fundId: '',
    userId: '',

  }
  constructor(private router: Router, 
    private purchaseService: PurchaseService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  createPurchases(createPurchase: any){
    this.purchaseService.createPurchase(createPurchase).subscribe(data => {
      if (data){
        this.router.navigateByUrl("/purchases");
      }
      console.log("Purchase is Created ", data);
      this.ngOnInit();
    })
  }

}
