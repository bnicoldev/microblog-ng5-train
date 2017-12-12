import { Component, OnInit, Input} from '@angular/core';
import { Message } from '../../shared/message';


@Component({
  selector: 'mcb-messages',
  templateUrl: './messages.component.html',
  styles: []
})
export class MessagesComponent implements OnInit {

  @Input() message: Message;

  constructor() { }

  ngOnInit() {
    let msg:Message = {author: 'testOnInit',content:'test on init'} ;
    this.message = this.message ||  msg;
  }

}
