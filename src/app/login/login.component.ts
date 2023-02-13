import { HttpClient } from '@angular/common/http';
import { ApiService } from './../api-service/api.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  alert: string = 'Loading...';
  boolean!: boolean;
  constructor(
    public apiservice: ApiService,
    public http: HttpClient,
    public router: Router
  ) {}
  login(form: any) {
    this.http.get<any>('http://localhost:3000/register').subscribe((res) => {
      let user = res.find((data: any) => {
        return (
          data.email === form.email.value &&
          data.password === form.password.value
        );
      });
      if (user) {
        this.boolean = true;
        setTimeout(() => {
          this.alert = 'successful login...';
        }, 1000);
        setTimeout(() => {
          this.router.navigate(['/service']);
        }, 1700);
      } else {
        alert('anything wrong');
        this.boolean = false;
      }
    });
  }
}
