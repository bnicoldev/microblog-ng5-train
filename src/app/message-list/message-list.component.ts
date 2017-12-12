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
      {author: 'Thor', content: 'Waaaaagh !',createdAt: new Date(1900,0,1) },
      {author: 'Ironman', content: 'Really ?!?',createdAt: new Date(1900,0,2)},      
    ]

  }
}
