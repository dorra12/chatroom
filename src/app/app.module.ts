import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiscordComponent } from './pages/discord/discord.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { ConnectComponent } from './pages/connect/connect.component';
import { MessagesComponent } from './pages/messages/messages.component';
@NgModule({
  declarations: [AppComponent, DiscordComponent, RoomsComponent, UsersComponent, RegisterComponent, NavbarComponent, ConnectComponent, MessagesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
