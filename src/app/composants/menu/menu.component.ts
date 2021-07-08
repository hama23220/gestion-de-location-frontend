import { Component, OnInit } from '@angular/core';
import {Menu} from './menu';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public menuProperties: Array<Menu> = [
    {
      id: '1',
      titre: 'Tableau de bord',
      icon: 'fas fa-chart-line',
      url: '',
      sousMenu: [
        {
          id: '11',
          titre: 'Vue d\'ensemble',
          icon: 'fas fa-chart-pie',
          url: ''
        },
        {
          id: '12',
          titre: 'Statistiques',
          icon: 'fas fa-chart-bar',
          url: 'statistiques'
        }
      ]
    },
    {
      id: '2',
      titre: 'Voitures',
      icon: 'fas fa-car',
      url: '',
      sousMenu: [
        {
          id: '21',
          titre: 'Voitures',
          icon: 'fas fa-car',
          url: 'voitures'
        },
        {
          id: '22',
          titre: 'Entretiens',
          icon: 'fas fa-wrench',
          url: 'entretien'
        }
      ]
    },
    {
      id: '3',
      titre: 'Clients',
      icon: 'fas fa-user',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Clients',
          icon: 'fas fa-user',
          url: 'clients'
        },
        {
          id: '32',
          titre: 'Réservation Clients',
          icon: 'fas fa-copy',
          url: ''
        }
      ]
    },
    {
      id: '4',
      titre: 'Conducteurs',
      icon: 'far fa-user',
      url: '',
      sousMenu: [
        {
          id: '41',
          titre: 'Conducteurs',
          icon: 'far fa-user',
          url: 'conducteurs'
        },
        {
          id: '42',
          titre: 'Contrats',
          icon: 'fas fa-file-alt',
          url: 'contrats'
        }
      ]
    },
    {
      id: '5',
      titre: 'Paramétrages',
      icon: 'fas fa-file-alt',
      url: '',
      sousMenu: [
        {
          id: '51',
          titre: 'Modeles',
          icon: 'fas fa-tools',
          url: 'modeles'
        },
        {
          id: '52',
          titre: 'utilisateurs',
          icon: 'fas fa-user',
          url: 'utilisateur'
        }
      ]
    }
  ];
  private lastSelectedMenu: Menu | undefined;

  constructor(
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }

}
