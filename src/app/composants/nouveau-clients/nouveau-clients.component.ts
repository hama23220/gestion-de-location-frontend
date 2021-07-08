import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nouveau-clients',
  templateUrl: './nouveau-clients.component.html',
  styleUrls: ['./nouveau-clients.component.css']
})
export class NouveauClientsComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.router.navigate(['clients']);
  }
}
