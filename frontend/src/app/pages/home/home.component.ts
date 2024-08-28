import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  alldata: any[] = [];
  filtered: any[] = [];
  fill = false;

  constructor(private service: DataService) { }
  ngOnInit(): void {
    this.service.getUsers().subscribe((data: any) => {
      this.alldata = data.user;
    }, (err) => {
      console.log(err);
    })
  }
  onchange(search: any, role: any) {
    // if (role != "") {
    //   this.fill = true;
    //   const filter = this.alldata.filter(data => data.Role === role);
    //   this.filtered = filter;
    // } else {
    //   this.fill = false;
    // }
    this.fill = true;
    this.filtered = this.alldata.filter((data: any) => {
      const matchesSearch = data.FirstName.toLowerCase().includes(search.toString().toLowerCase()) ||
        data.Email.toLowerCase().includes(search.toString().toLowerCase()) ||
        data.Role.toLowerCase().includes(search.toString().toLowerCase());
      const matchesRole = role.toString() ? data.Role === role.toString() : true;
      return matchesSearch && matchesRole;
    })
    console.log(this.filtered);

  }

}
