import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiscordComponent } from './pages/discord/discord.component';
import { RegisterComponent } from './pages/register/register.component';
import { ConnectComponent } from './pages/connect/connect.component';

const routes: Routes = [
  { path: '', redirectTo: 'discord/1', pathMatch: 'full' },
  { path: 'discord/:id', component: DiscordComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'connect', component: ConnectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
