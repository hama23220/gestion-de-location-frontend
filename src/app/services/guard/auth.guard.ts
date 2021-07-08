import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from "@angular/router";
import { Injectable } from "@angular/core";
import { TokenStorageService } from "../interceptor/token-storage.service";



@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const token = localStorage.getItem("token");
    const user = this.tokenStorage.getUser();
    if (this.tokenStorage.getToken()) {
      if (route.data.role && route.data.role.indexOf(user.role) === -1) {
        this.router.navigate(["/statistiques"]);
        return false;
      } else {
        return true;
      }
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}
