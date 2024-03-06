import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { AccountService } from 'src/app/_services/account.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.scss'],
	providers: [
		{
			provide: BsDropdownConfig,
			useValue: { isAnimated: true, autoClose: true },
		},
	],
})
export class NavbarComponent implements OnInit {
	model: any = {};
	logged: boolean = false;

	constructor(private readonly accountService: AccountService) {}

	ngOnInit(): void {}

	login() {
		this.accountService.login(this.model).subscribe({
			next: (response) => {
				console.log(response);
				this.logged = true;
			},
			error: (error) => {
				console.log(error);
			},
		});
	}

	logout() {
		this.logged = false;
	}
}
