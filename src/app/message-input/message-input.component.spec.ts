import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInputComponent } from './message-input.component';
import { FormsModule } from '@angular/forms';
import { MessageStoreService } from '../shared/message-store.service';

describe('MessageInputComponent', () => {
  let component: MessageInputComponent;
  let fixture: ComponentFixture<MessageInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule],
      declarations: [MessageInputComponent ],
      providers: [MessageStoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });

  describe('#addMessage',()=>{
    xit('should set textMessage property', () => {
      //given
      component.textMessage = undefined;
      //when
      component.addMessage({content:'mon nouveau message'});
      //then
      expect(component.textMessage).toEqual('mon nouveau message');

    });
    
  });

});
