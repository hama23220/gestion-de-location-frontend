import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { MenuComponent } from './composants/menu/menu.component';
import { HeaderComponent } from './composants/header/header.component';
import { PageVoitureComponent } from './pages/voitures/page-voiture/page-voiture.component';
import { DetailVoitureComponent } from './composants/detail-voiture/detail-voiture.component';
import { PaginationComponent } from './composants/pagination/pagination.component';
import { ButtonActionComponent } from './composants/button-action/button-action.component';
import { NouvelVoitureComponent } from './pages/voitures/nouvel-voiture/nouvel-voiture.component';
import { PageEntretienComponent } from './pages/entretien/page-entretien/page-entretien.component';
import { DetailEntretienVoitureComponent } from './composants/detail-entretien-voiture/detail-entretien-voiture.component';
import { DetailEntretienComponent } from './composants/detail-entretien/detail-entretien.component';
import { DetailClientComponent } from './composants/detail-client/detail-client.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { NouveauClientsComponent } from './composants/nouveau-clients/nouveau-clients.component';
import { PageConducteurComponent } from './pages/conducteur/page-conducteur/page-conducteur.component';
import { NouceauConducteurComponent } from './composants/nouceau-conducteur/nouceau-conducteur.component';
import { DetailsConducteurComponent } from './composants/details-conducteur/details-conducteur.component';
import { PagesModelesComponent } from './pages/modeles/pages-modeles/pages-modeles.component';
import { NouveauModeleComponent } from './pages/modeles/nouveau-modele/nouveau-modele.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { DetailUtilisateurComponent } from './composants/detail-utilisateur/detail-utilisateur.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageContratComponent } from './pages/contrat/page-contrat/page-contrat.component';
import { NouveauContratComponent } from './pages/contrat/nouveau-contrat/nouveau-contrat.component';
import { DetailContratComponent } from './composants/detail-contrat/detail-contrat.component';
import { PageReservationComponent } from './pages/resclient/page-reservation/page-reservation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './services/guard/auth.guard';
import { TokenStorageService } from './services/interceptor/token-storage.service';
import { AuthInterceptor, authInterceptorProviders } from './services/guard/auth.interceptor';
import { ModeleService } from './services/modele/modele.service';




@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    PageDashboardComponent,
    PageStatistiquesComponent,
    MenuComponent,
    HeaderComponent,
    PageVoitureComponent,
    DetailVoitureComponent,
    PaginationComponent,
    ButtonActionComponent,
    NouvelVoitureComponent,
    PageEntretienComponent,
    DetailEntretienVoitureComponent,
    DetailEntretienComponent,
    DetailClientComponent,
    PageClientComponent,
    NouveauClientsComponent,
    PageConducteurComponent,
    NouceauConducteurComponent,
    DetailsConducteurComponent,
    PagesModelesComponent,
    NouveauModeleComponent,
    PageUtilisateurComponent,
    DetailUtilisateurComponent,
    NouvelUtilisateurComponent,
    PageProfilComponent,
    ChangerMotDePasseComponent,
    PageContratComponent,
    NouveauContratComponent,
    DetailContratComponent,
    PageReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthGuard,
    TokenStorageService,
    AuthInterceptor,
    authInterceptorProviders,
    ModeleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
