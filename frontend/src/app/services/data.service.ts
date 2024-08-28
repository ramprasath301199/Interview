import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public API = 'http://localhost:3015/api/'
  constructor(private http: HttpClient) { }
  createuser(form: any) {
    var headers = new HttpHeaders();
    headers.append("Content-Type", 'application/json');
    console.log(form);
    var json = {
      FirstName: form.firstname,
      LastName: form.lastname,
      Email: form.email,
      Mobile: form.mobile,
      Role: form.role,
      Password: form.password
    }
    return this.http.post(this.API + "signup", json, { headers: headers })
  }
  loginuser(form: any) {
    var headers = new HttpHeaders();
    headers.append("Content-Type", 'application/json');
    console.log(form);
    var json = {
      email: form.email,
      password: form.password
    }
    return this.http.post(this.API + "login", json, { headers: headers })
  }
  getUsers(){
    return this.http.get(this.API+"getallusers")
  }
}
