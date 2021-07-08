import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { ModeleService } from 'src/app/services/modele/modele.service';

@Component({
  selector: 'app-nouveau-modele',
  templateUrl: './nouveau-modele.component.html',
  styleUrls: ['./nouveau-modele.component.css']
})
export class NouveauModeleComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private router: Router,
    private modeleservice : ModeleService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      marque: new FormControl("", [Validators.required]),
      nomm: new FormControl("", [Validators.required]),
      carburant: new FormControl("", [Validators.required]),
      puissance: new FormControl("", [Validators.required]),
    });
  }

  cancelClick(): void {
    this.router.navigate(['modeles']);
  }
  addModele(){
    if (this.form.valid) {
      console.log(this.form.value);
      this.modeleservice.postmodele(this.form.value).subscribe(data =>{
        console.log("modele ajouter");
      });
    }
  }
}
