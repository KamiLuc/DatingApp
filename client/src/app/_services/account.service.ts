import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_dtos/user';

@Injectable({
	providedIn: 'root',
})
export class AccountService {
	private currentUserSource = new BehaviorSubject<User | null>(null);

	currentUser$ = this.currentUserSource.asObservable();
	baseUrl = 'https://localhost:5001/api/';

	constructor(private readonly httpClient: HttpClient) {}

	login(model: any) {
		return this.httpClient
			.post<User>(this.baseUrl + 'account/login', model)
			.pipe(
				map((response: User) => {
					const user = response;
					if (user) {
						localStorage.setItem('user', JSON.stringify(user));
						this.currentUserSource.next(user);
					}
				})
			);
	}

	logout() {
		localStorage.removeItem('user');
		this.currentUserSource.next(null);
	}

	setRememberedUser() {
		let user = this.getCurrentUserFromLocalStorage();

		if (user) {
			this.setCurrentUser(user);
		}
	}

	setCurrentUser(user: User) {
		this.currentUserSource.next(user);
	}

	private getCurrentUserFromLocalStorage(): User | null {
		const userJson: string | null = localStorage.getItem('user');

		if (userJson) {
			const user: User | null = JSON.parse(userJson);

			if (user) {
				return user;
			}
		}

		return null;
	}
}
