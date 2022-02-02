import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { inject } from "@angular/core";
import { fakeAsync, TestBed, tick } from "@angular/core/testing";
import { environment } from "src/environments/environment";
import { FundService } from '../fund.service';
import { FundsComponent } from "./funds.component";
import { Fund } from '../fund/fund.model';
// import { cy } from 'date-fns/locale';

describe('FundService', () => {
  let fundService: FundService;
  let httpTestingController: HttpTestingController;
  let baseUrl = "https://francs.herokuapp.com/funds";
  let fund: Fund;
  
 

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[FundService]
    });

    fundService = TestBed.inject(FundService);
    httpTestingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(fundService).toBeTruthy();
  });

  it('should retrieve all funds', ()=>{

    fundService.getFunds().subscribe(funds=>{
      expect(funds).toBeTruthy('No Funds Returned');
      expect(funds.length).toBe(2222, "incorrect number of funds");
      let fund = funds.find((fund: { id: number; })=>fund.id ===0);
      expect(fund?.symbol).toBe('Angular Testing Course');
      });
        const req = httpTestingController.expectOne(baseUrl);
        expect(req.request.method).toEqual('GET');


        req.flush({fund});
        httpTestingController.verify();
    }); 

    it('should delete one fund', ()=>{

      fundService.deleteFunds(fund.id).subscribe(funds=>{
        expect(funds).toBeTruthy('No Funds Deleted');
        });
          const req = httpTestingController.expectOne(baseUrl);
          expect(req.request.method).toEqual('DELETE');
  
  
          req.flush({fund});
          httpTestingController.verify();
      }); 
    
})



//     const req = httpTestingController.expectOne(baseUrl);
//     console.log(req.request.url);
//     expect(req.request.method).toEqual('GET');
    // fundService.getFunds().subscribe(funds=> {
    //   expect(funds).toBeTruthy('No Courses Returned');
    //   expect(funds.length).toBe(454, "incorrect number of courses");
    //   let fund = funds.find(((fund =>fund.id ===454)));
           
    // })
 
    

//     req.flush({payload:Object.values(fundService)})
//   httpTestingController.verify();
// });
// })
//     fundService.getFunds().subscribe(funds=>{
//         expect(funds).toBeTruthy('No Courses Returned');
//         expect(funds.length).toBe(454, "incorrect number of courses");
//         let fund = funds.find(((fund: { id: number; }) =>fund.id ===454));
//         expect(fund.symbol.description).toBe('Angular Testing Course');
//     })

//     const req = httpTestingController.expectOne("https://francs.herokuapp.com/funds");
//     expect(req.request.method).toEqual('GET');

//     req.flush({payload:Object.values(FundService)})

//     httpTestingController.verify();

// });
// })

