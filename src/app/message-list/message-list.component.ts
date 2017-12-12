import { Component, Input,OnInit } from '@angular/core';
import { Message } from '../shared/message';
import { MessageStoreService } from '../shared/message-store.service';


@Component({
  selector: 'mcb-message-list',
  templateUrl: './message-list.component.html',
  styles: []
})
export class MessageListComponent implements OnInit {

  messages: Array<Message>;

  constructor(private msgSrv: MessageStoreService) { }

  ngOnInit() {   
    this.messages = this.msgSrv.messageStore;
  }




}
