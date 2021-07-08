import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-page-voiture',
  templateUrl: './page-voiture.component.html',
  styleUrls: ['./page-voiture.component.css']
})
export class PageVoitureComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  nouvelVoiture(): void {
     this.router.navigate(['nouvelvoitures']);
  }
}
