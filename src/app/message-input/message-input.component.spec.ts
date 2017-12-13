import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageInputComponent } from './message-input.component';
import { FormsModule } from '@angular/forms';
import { MessageStoreService } from '../shared/message-store.service';

describe('MessageInputComponent', () => {
  let component: MessageInputComponent;
  let fixture: ComponentFixture<MessageInputComponent>;
  let svc: MessageStoreService;
  
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
    //svc = fixture.debugElement.injector.get(MessageStoreService);
    svc = TestBed.get(MessageStoreService); //autre methode
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });


  describe('#addMessage', () => {
    
        it('should post new message using the message-store service', () => {
          //given
          spyOn(svc,'addMessage').and.stub; // stub pour controler le comportement de la fct, 
          component.textMessage = 'init msg';
          //when
          component.addMessage();
          //then
         expect(svc.addMessage).toHaveBeenCalledWith({author:'John',content:'init msg'});
         
          expect(component).toBeTruthy();
        });
    


        it('should empty textMessage after addMessage', () => {
          //given
          component.textMessage = 'init msg';
          //when
          component.addMessage();
          //then
          expect(component.textMessage).toEqual('');
         
    
        });
    

    
      });
    


});
