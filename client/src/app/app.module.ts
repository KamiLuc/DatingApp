import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './_components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HomePageComponent } from './_views/home-page/home-page.component';
import { RegisterPageComponent } from './_views/register-page/register-page.component';
import { MemberListComponent } from './_components/members/member-list/member-list.component';
import { MemberDetailComponent } from './_components/members/member-detail/member-detail.component';
import { ListsComponent } from './_components/lists/lists.component';
import { MessagesComponent } from './_components/messages/messages.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		HomePageComponent,
		RegisterPageComponent,
		MemberListComponent,
		MemberDetailComponent,
		ListsComponent,
		MessagesComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		BsDropdownModule.forRoot(),
		ToastrModule.forRoot({
			positionClass: 'toast-bottom-right',
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
