import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInputComponent } from './message-input.component';

describe('MessageInputComponent', () => {
  let component: MessageInputComponent;
  let fixture: ComponentFixture<MessageInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageInputComponent ]
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
    it('should set textMessage property', () => {
      //given
      component.textMessage = undefined;
      //when
      component.addMessage({value:'mon nouveau message'});
      //then
      expect(component.textMessage).toEqual('mon nouveau message');

    });
    
  });

});
