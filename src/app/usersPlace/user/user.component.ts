import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = {
    id: 0,
    userName: '',
    userEmail: '',
    userAge: 0,
  };

  constructor(private route:ActivatedRoute, 
    private userService: UserService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      const myid = +params['id'];
      this.userService.getUser(myid).subscribe(payload=>{
        console.log(payload);
        this.user = payload;
      })
    })
  }

    edit():void {
      this.router.navigateByUrl(`/users/${this.user.id}/edit`);
    }
}
