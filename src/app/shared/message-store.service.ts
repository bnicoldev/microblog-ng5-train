import { Injectable } from '@angular/core';
import { Message } from './message';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class MessageStoreService {

  messageStore: Array<Message> = [];

  // private declare implicitement l'attribut en local 
  constructor() { 

  }

  addMessage(msg: Message): void {
    if (this.messageStore.length > 3)
      this.messageStore.shift();
    this.messageStore.push(msg);
  }
  
  getMessages(): Message[] {    
    return this.messageStore;
  }


}
