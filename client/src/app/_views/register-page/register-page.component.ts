import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { StrongPasswordRegx } from 'src/app/_utils/regexes/regexes';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
	registerForm = new FormGroup(
		{
			email: new FormControl('', [Validators.required, Validators.email]),
			password: new FormControl('', [
				Validators.required,
				Validators.minLength(8),
				Validators.pattern(StrongPasswordRegx),
			]),
			confirmPassword: new FormControl('', [Validators.required]),
		},
		{
			validators: this.passwordMatchValidator,
		}
	);

	constructor() {}

	ngOnInit(): void {}

	passwordMatchValidator(control: AbstractControl) {
		return control.get('password')?.value ===
			control.get('confirmPassword')?.value
			? null
			: { passwordMismatch: true };
	}

	get passwordMatchError(): boolean {
		return this.registerForm.hasError('passwordMismatch');
	}

	register() {
		console.log(this.registerForm.value);
	}

	cancel() {
		console.log('canceled');
	}

	get passwordFormField() {
		return this.registerForm.get('password')!;
	}

	get confirmPasswordFormField() {
		return this.registerForm.get('confirmPassword')!;
	}

	get emailFormField() {
		return this.registerForm.get('email')!;
	}
}
