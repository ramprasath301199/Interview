import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUserTie, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterLink,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  logout = faRightFromBracket;
  user = faUserTie;
  role:any="";
  constructor(private router: Router) { }
  ngOnInit(): void {
   this.role = localStorage.getItem("role")
  }
  signout() {
    if (confirm("If You Sure Want You Logout"))
      this.router.navigate(["/login"])
  }
}
