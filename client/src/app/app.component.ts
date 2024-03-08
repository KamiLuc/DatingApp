import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AccountService } from './_services/account.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title: string = 'Dating app';
	users: any;

	constructor(
		private readonly httpClient: HttpClient,
		private readonly accountService: AccountService
	) {}

	ngOnInit(): void {
		this.httpClient.get('https://localhost:5001/api/users').subscribe({
			next: (data) => {
				this.users = data;
			},
			error: (error) => {
				console.log(error);
			},
		});

		this.accountService.setUserFromLocalStorage();
	}
}
