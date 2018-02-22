import { Component, OnInit, Input, Output } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isCollapsed = true;
  
  constructor(private router: Router) { }


  ngOnInit() {
  }

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }


}
