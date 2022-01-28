import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PurchaseService } from '../purchase.service';
import { Purchase } from './purchase.model';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent implements OnInit {

  purchase:Purchase = {
    id: 0,
    amount: 0,
    fundId: 0,
    userId: 0,
  };

  constructor(private route:ActivatedRoute, 
    private purchaseService: PurchaseService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.purchaseService.getPurchase(myid).subscribe(payload=>{
        console.log(payload);
        this.purchase = payload;
      })
    })
  }

    edit():void {
      this.router.navigateByUrl(`/purchases/${this.purchase.id}/edit`);
    }
}
