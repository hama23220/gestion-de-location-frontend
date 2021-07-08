import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nouceau-conducteur',
  templateUrl: './nouceau-conducteur.component.html',
  styleUrls: ['./nouceau-conducteur.component.css']
})
export class NouceauConducteurComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  cancelClick(): void {
    this.router.navigate(['conducteurs']);
  }
}
