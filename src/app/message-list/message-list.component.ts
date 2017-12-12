import { Component, OnInit } from '@angular/core';
import { Message } from '../shared/message';

@Component({
  selector: 'mcb-message-list',
  templateUrl: './message-list.component.html',
  styles: []
})
export class MessageListComponent implements OnInit {

  messages: Array<Message>;

  constructor() { }

  ngOnInit() {
    this.messages = [
      {author: 'AA', content: 'Message from AA',createdAt: new Date(1900,0,1) },
      {author: 'BB', content: 'Message from BB',createdAt: new Date(1900,1,1)},
      {author: 'CC', content: 'Message from CC',createdAt: new Date(1900,2,1)},
      {author: 'AA', content: 'Message 2 from AA',createdAt: new Date(1900,0,2)},
      {author: 'CC', content: 'Message 2 from CC',createdAt: new Date(1900,0,3)}
    ]

  }
}
