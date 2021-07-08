import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ModeleService } from 'src/app/services/modele/modele.service';

@Component({
  selector: 'app-pages-modeles',
  templateUrl: './pages-modeles.component.html',
  styleUrls: ['./pages-modeles.component.css']
})
export class PagesModelesComponent implements OnInit {
  modeles: any = [];
  errorMsgs = '';
   
  constructor(
    private router: Router, private modeleservice: ModeleService
  ) { }

  ngOnInit(): void {
    this.modeleservice.getData().subscribe((modeles) => {
        this.modeles = modeles;
    })
  }

  delete(id: number){
    if(confirm('are you sure to delete it ! ')){
      this.modeleservice.Deletemodele(id).subscribe();
    }
  }

  nouvelmodeles(): void {
    this.router.navigate(['nouveaumodeles']);
  }
  modifierModele(id?: number): void {
    this.router.navigate(['nouvellecategorie', id]);
  }

}
