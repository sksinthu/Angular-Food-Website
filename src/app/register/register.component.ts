import { Router } from '@angular/router';
import { ApiService } from './../api-service/api.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(public apiservice: ApiService, public router: Router) {}
  // onSubmit(data:any){
  // this.apiservice.postEmployee(data)
  // .subscribe((res)=>{
  // alert('sdhsjfsfsfg')

  // })
  // console.log(data.value);

  // }
  anything: any = 'Loading....';
  boolean!: boolean;
  submit(data: any) {
    this.apiservice.postEmployee(data.value).subscribe(
      (res) => {
        // alert('succesful register');
        this.boolean = true;
        data.reset('');
        setTimeout(() => {
          this.anything = 'success full registerd...';
        }, 1000);
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 1700);
      },
      (error) => {
        alert('something wrong');
        this.boolean = false;
      }
    );
  }
}
