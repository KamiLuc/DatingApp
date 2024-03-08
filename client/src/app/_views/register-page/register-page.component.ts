import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
	model: any = {};

	constructor() {}

	ngOnInit(): void {}

	register() {
		console.log(this.model);
	}

	cancel() {
		console.log('canceled');
	}
}
