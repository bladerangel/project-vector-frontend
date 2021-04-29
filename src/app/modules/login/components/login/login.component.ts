import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../../../services/login/login.service';
import { User } from './../../../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public title: string;
  public errorMessage: string;
  public user: User;

  constructor(private loginService: LoginService, private router: Router) {

    this.title = 'Sign In';
   }



  ngOnInit(): void {

    this.user = new User(null, '', '', null, null);
  }

  onSubmit(): void {
    this.loginService.signIn(this.user)
            .subscribe(
                (response) => {
                    this.loginService.setAuthUser(response);
                    this.router.navigate(['/document']);
                },
                (error) => {

                    this.errorMessage = 'Incorrect username or password.';
                }
            );
    }

}
