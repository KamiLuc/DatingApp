import { Component, OnInit } from '@angular/core';
import {
	AbstractControl,
	FormControl,
	FormGroup,
	Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegisterUserDto } from 'src/app/_dtos/registerUser.dto';
import { AccountService } from 'src/app/_services/account.service';
import { StrongPasswordRegx } from 'src/app/_utils/regexes/regexes';

@Component({
	selector: 'app-register-page',
	templateUrl: './register-page.component.html',
	styleUrls: ['./register-page.component.scss'],
})
export class RegisterPageComponent implements OnInit {
	registerForm = new FormGroup(
		{
			userName: new FormControl('', [
				Validators.required,
				Validators.minLength(5),
			]),
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

	constructor(
		private accountService: AccountService,
		private readonly toastr: ToastrService
	) {}

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
		const user: RegisterUserDto = {
			userName: this.userNameFormField.value!,
			password: this.passwordFormField.value!,
		};

		this.accountService.register(user).subscribe({
			next: (respone) => {
				console.log(respone);
			},
			error: (error) => this.toastr.error(error.error),
		});
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

	get userNameFormField() {
		return this.registerForm.get('userName')!;
	}
}
