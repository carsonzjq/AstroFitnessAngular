import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './user.service';
@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private user: UserService, private router: Router){}
	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
		return this.user.getLoggedIn();
	}

	// canActivate(){
	// 	if(this.user.getLoggedIn){
	// 		this.router.navigate('client-home');
	// 		return true;
	// 	}else {
	// 		this.router.navigate('home');
	// 		return false;
	// 	}
	// }
}
