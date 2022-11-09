import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navegacionMovil : any;
  constructor() {
    this.navegacionMovil = document.querySelector(".navegacion");
  }

  ngOnInit(): void {
    console.log(this.navegacionMovil);
  }


  if () {

  }

}
