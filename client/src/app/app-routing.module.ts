import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './_views/home-page/home-page.component';
import { MemberListComponent } from './_components/members/member-list/member-list.component';
import { MemberDetailComponent } from './_components/members/member-detail/member-detail.component';
import { ListsComponent } from './_components/lists/lists.component';
import { MessagesComponent } from './_components/messages/messages.component';

const routes: Routes = [
	{ path: 'members', component: MemberListComponent },
	{ path: 'members/:id', component: MemberDetailComponent },
	{ path: 'lists', component: ListsComponent },
	{ path: 'messages', component: MessagesComponent },
	{ path: 'home', component: HomePageComponent },
	{ path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
