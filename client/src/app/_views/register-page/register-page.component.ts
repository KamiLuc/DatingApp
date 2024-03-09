import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StrongPasswordRegx } from 'src/app/_utils/regexes/regexes';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
	registerForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
		password: new FormControl('', [
			Validators.required,
			Validators.minLength(8),
			Validators.pattern(StrongPasswordRegx),
		]),
	});

	constructor() {}

	ngOnInit(): void {}

	register() {
		console.log(this.registerForm.value);
	}

	cancel() {
		console.log('canceled');
	}

	get passwordFormField() {
		return this.registerForm.get('password');
	}

	get emailFormField() {
		return this.registerForm.get('email')!;
	}
}
