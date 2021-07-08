import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const AUTH_API = environment.baseURL;
// tslint:disable-next-line:class-name
interface modele {
  id: number;
  nomm: string;
  carburant: string;
  marque: string;
  puissance: number;
}

@Injectable({
  providedIn: 'root'
})
export class ModeleService {
  rootUrl = 'http://localhost:8082/modeles';
  constructor(private http: HttpClient) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(AUTH_API + "gestiondelocationdevoiture/modeles/all");
  }

  postmodele(modele: modele): Observable<any>{
    return this.http.post(AUTH_API + "gestiondelocationdevoiture/modeles/create", modele

    );
  }

  Deletemodele(id: number): Observable<any> {
    return this.http.delete(AUTH_API + "gestiondelocationdevoiture/modeles/delete/"+id);
  }

  updatemodele(id: number, modele: modele) {
    return this.http.post(this.rootUrl + "/create", {
      carburant: modele.carburant,
      marque: modele.marque,
      nomm: modele.nomm,
      puissance: modele.puissance
    } );

  }

  findbyId(id: number){
    return this.http.get (this.rootUrl + "{id}");
  }

}
