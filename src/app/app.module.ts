import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessagesComponent } from './message-list/messages/messages.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { MessageStoreService } from './shared/message-store.service';


@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    MessagesComponent,
    MessageInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MessageStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
