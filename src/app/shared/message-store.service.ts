import { Injectable } from '@angular/core';
import { Message } from './message';


@Injectable()
export class MessageStoreService {

  messages: Array<Message> = [];

  // private declare implicitement l'attribut en local 
  constructor() { 

  }

  addMessage(msg: Message): void {
    this.messages.push(msg);
  }
  
  getMessages(): Array<Message> {

    return undefined;
  }


}
