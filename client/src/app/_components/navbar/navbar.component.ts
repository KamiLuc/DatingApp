import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { ToastrService } from 'ngx-toastr';
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

	constructor(
		readonly accountService: AccountService,
		private readonly toastrService: ToastrService
	) {}

	ngOnInit(): void {}

	login() {
		this.accountService.login(this.model).subscribe({
			next: (response) => {
				console.log(response);
			},
			error: (error) => {
				this.toastrService.error(error.error);
			},
		});
	}

	logout() {
		this.accountService.logout();
	}
}
