import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageLoginComponent} from './pages/page-login/page-login.component';
import {PageInscriptionComponent} from './pages/page-inscription/page-inscription.component';
import {PageDashboardComponent} from './pages/page-dashboard/page-dashboard.component';
import {PageStatistiquesComponent} from './pages/page-statistiques/page-statistiques.component';
import {PageVoitureComponent} from './pages/voitures/page-voiture/page-voiture.component';
import {NouvelVoitureComponent} from './pages/voitures/nouvel-voiture/nouvel-voiture.component';
import {PageEntretienComponent} from './pages/entretien/page-entretien/page-entretien.component';
import {PageClientComponent} from './pages/client/page-client/page-client.component';
import {NouveauClientsComponent} from './composants/nouveau-clients/nouveau-clients.component';
import {PageConducteurComponent} from './pages/conducteur/page-conducteur/page-conducteur.component';
import {NouceauConducteurComponent} from './composants/nouceau-conducteur/nouceau-conducteur.component';
import {PagesModelesComponent} from './pages/modeles/pages-modeles/pages-modeles.component';
import {NouveauModeleComponent} from './pages/modeles/nouveau-modele/nouveau-modele.component';
import {PageUtilisateurComponent} from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import {NouvelUtilisateurComponent} from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import {PageProfilComponent} from './pages/profil/page-profil/page-profil.component';
import {ChangerMotDePasseComponent} from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import {PageContratComponent} from './pages/contrat/page-contrat/page-contrat.component';
import {NouveauContratComponent} from './pages/contrat/nouveau-contrat/nouveau-contrat.component';
import { AuthGuard } from './services/guard/auth.guard';


const routes: Routes = [
  {
    path: 'login',
    component: PageLoginComponent
  },
  {
    path: 'inscrire',
    component: PageInscriptionComponent
  },
  {
    path: '',
    component: PageDashboardComponent,
    children: [
      {
        path: 'statistiques',
        component: PageStatistiquesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'voitures',
        component: PageVoitureComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'nouvelvoitures',
        component: NouvelVoitureComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'entretien',
        component: PageEntretienComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'clients',
        component: PageClientComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'nouveauclient',
        component: NouveauClientsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'conducteurs',
        component: PageConducteurComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'nouveauconducteur',
        component: NouceauConducteurComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'contrats',
        component: PageContratComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'nouveaucontrat',
        component: NouveauContratComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'modeles',
        component: PagesModelesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'nouveaumodeles',
        component: NouveauModeleComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'utilisateur',
        component: PageUtilisateurComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'nouvelutilisateur',
        component: NouvelUtilisateurComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'profil',
        component: PageProfilComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'changermotdpasse',
        component: ChangerMotDePasseComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
