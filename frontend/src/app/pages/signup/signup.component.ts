import { CommonModule } from '@angular/common';
import { Component, OnDestroy } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnDestroy {
  myform: FormGroup;
  subscribe: Subscription | undefined;
  constructor(private fb: FormBuilder, private service: DataService, private router: Router) {
    this.myform = this.fb.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.required],
      mobile: ["", Validators.required],
      role: ["", Validators.required],
      password: ["", Validators.required]
    })
  }
  ngOnDestroy(): void {
    this.subscribe?.unsubscribe();
  }
  submit(form: FormGroup) {
    this.subscribe = this.service.createuser(form.value).subscribe((data: any) => {
      if (data.message == "success") {
        this.router.navigate(["/login"])
      }
    }, (err) => {
      if (err.error.message) {
        alert(err.error.message)
      }
    })
  }

}
