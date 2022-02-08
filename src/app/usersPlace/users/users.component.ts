import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user.model';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  public maxSize: number = 5;
  public directionLinks: boolean = true;
  public autoHide: boolean = false;
  public responsive: boolean = true;
  public changeText: boolean;

  public labels: any = {
      previousLabel: '<--',
      nextLabel: '-->',
      screenReaderPaginationLabel: 'Pagination',
      screenReaderPageLabel: 'page',
      screenReaderCurrentLabel: `You're on page`
  };


  constructor(private router: Router, 
    private userService: UserService, 
    private route: ActivatedRoute) { this.changeText = false; }


  config: any;
  collection = {};
  term: string = '';
  users:User[] = [];
    

showDiv = {
  id : false,
  userEmail : false,
  userName : false,
  userAge : false,
}

  // this should be in hte dyn-table.component.ts
  sortChanged(e: any) {
    // save cookie with table sort data here
    console.log(e);
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.sortChanged;
      this.userService.getUsers().subscribe(payload=>{
        console.log(payload);
        this.users = payload;
        
        this.config ={
          id: '1',
          itemsPerPage: 25,
          currentPage: 1,
          totalItems: this.users.length,
          
        };
        
    })
  })
}


  deleteUsers(id: number){
    if(confirm("Are you sure you want to delete this purchase?") == true){
    this.userService.deletePurchases(id).subscribe(data =>{
      this.ngOnInit();
      })
    }
    else
    {
      
    }
    }

    onPageChanged(event: any){
      this.config.currentPage = event;
    }

 }