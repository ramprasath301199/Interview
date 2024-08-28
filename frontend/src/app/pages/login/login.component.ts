import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnDestroy {
  loginform: FormGroup;
  subscribe: Subscription | undefined;
  constructor(private fb: FormBuilder, private service: DataService, private router: Router) {
    this.loginform = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
  submit(form: FormGroup) {
    this.subscribe = this.service.loginuser(form.value).subscribe((data: any) => {
      if (data.message == "success") {
        localStorage.setItem("role", data.user[0].Role)
        this.router.navigate(["/home"])
      }
    }, (err) => {
      if (err.error.message) {
        alert(err.error.message)
      }
    })
  }
}
