import { Component, OnInit } from '@angular/core';
import { MessageStoreService } from '../shared/message-store.service';

@Component({
  selector: 'mcb-message-input',
  templateUrl: './message-input.component.html',
  styles: [] 

})
export class MessageInputComponent implements OnInit {

  textMessage: string;  // 2-way binding 

  constructor(private messageStoreService: MessageStoreService) {
    
   }

  ngOnInit() {
    this.textMessage = '';
  }

  addMessage(): void {
    this.messageStoreService.addMessage({
      author:'Hulk',
      content:this.textMessage,
      createdAt: new Date()
    });
    this.textMessage = '';
  }


}
