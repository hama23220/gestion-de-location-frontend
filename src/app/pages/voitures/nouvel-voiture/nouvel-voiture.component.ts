import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nouvel-voiture',
  templateUrl: './nouvel-voiture.component.html',
  styleUrls: ['./nouvel-voiture.component.css']
})
export class NouvelVoitureComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCancel(): void{
    this.router.navigate(['voitures']);
  }
}
