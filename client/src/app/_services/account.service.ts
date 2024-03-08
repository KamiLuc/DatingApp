import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_dtos/user';

@Injectable({
	providedIn: 'root',
})
export class AccountService {
	private readonly userLS = 'user';
	private readonly currentUserSource = new BehaviorSubject<User | null>(null);
	private readonly baseUrl = 'https://localhost:5001/api/';

	readonly currentUser$ = this.currentUserSource.asObservable();

	constructor(private readonly httpClient: HttpClient) {}

	login(model: any) {
		return this.httpClient
			.post<User>(this.baseUrl + 'account/login', model)
			.pipe(
				map((response: User) => {
					const user = response;
					if (user) {
						localStorage.setItem(this.userLS, JSON.stringify(user));
						this.currentUserSource.next(user);
					}
				})
			);
	}

	logout() {
		localStorage.removeItem(this.userLS);
		this.currentUserSource.next(null);
	}

	setUserFromLocalStorage() {
		let user = this.getCurrentUserFromLocalStorage();
		if (user) {
			this.setCurrentUser(user);
		}
	}

	setCurrentUser(user: User) {
		this.currentUserSource.next(user);
	}

	private getCurrentUserFromLocalStorage(): User | null {
		const userJson: string | null = localStorage.getItem(this.userLS);
		if (userJson) {
			const user: User | null = JSON.parse(userJson);
			if (user) {
				return user;
			}
		}

		return null;
	}
}
