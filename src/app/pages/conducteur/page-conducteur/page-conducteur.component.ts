import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-conducteur',
  templateUrl: './page-conducteur.component.html',
  styleUrls: ['./page-conducteur.component.css']
})
export class PageConducteurComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  nouveauconducteur(): void{
    this.router.navigate(['nouveauconducteur']);
  }
}
