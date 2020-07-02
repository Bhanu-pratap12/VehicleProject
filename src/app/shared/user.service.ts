//declare var require: any;
import { Injectable } from '@angular/core';
import { FormBuilder,FormGroup, Validators} from '@angular/forms';
import {HttpClient, HttpHeaders } from '@angular/common/http'
//import { MustMatch } from './_helpers/must-match.validator';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private fb:FormBuilder,private http:HttpClient) { }
  formModel=this.fb.group({
    FirstName:['',Validators.required],
    LastName:['',Validators.required],
    UserName:['',Validators.required],
    MobNo:['',Validators.required],
    dob:['',Validators.required],
    Email:['',[Validators.required,Validators.email]],
    Password:['',[Validators.required,Validators.minLength(6)]],
    ConfirmPassword:['',Validators.required]
  });

}
//   , {
//     validator: MustMatch('Password', 'ConfirmPassword')
// }
