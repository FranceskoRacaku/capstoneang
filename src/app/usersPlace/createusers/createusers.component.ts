import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user/user.model';
import { UserService } from 'src/app/usersPlace/user.service';


@Component({
  selector: 'app-createusers',
  templateUrl: './createusers.component.html',
  styleUrls: ['./createusers.component.scss']
})
export class CreateUsersComponent implements OnInit {


  createUser: any ={
    amount: '',
    fundId: '',
    userId: '',

  }
  constructor(private router: Router, 
    private userService: UserService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }


  createUsers(createUser: any){
    this.userService.createUser(createUser).subscribe(data => {
      if (data){
        this.router.navigateByUrl("/users");
      }
      console.log("User is Created ", data);
      this.ngOnInit();
    })
  }

}
