import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLogged:boolean;
  userName:string = "Amy";

  constructor() { }

  ngOnInit(): void {
    this.isLogged = true;
  }

  

}
