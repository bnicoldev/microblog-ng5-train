import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListComponent } from './message-list.component';
import { MessagesComponent } from './messages/messages.component';


describe('MessageListComponent Tests', () => {
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageListComponent
        ,MessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should contain ul element',() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ul').textContent).toBeTruthy();
  });

describe ('#ngOnInit', () =>  {
      it('should set property messages with default value',() => {
        // given
        component.messages = undefined;
        // when
        component.ngOnInit();
        // then
        expect(component.messages).toBeTruthy();
      });

      xit('should not be tested',() => {
        expect(component.messages).toBeTruthy();
      });

      it('should contain a messages Array with at least 1 elements',() => {
        // given
        component.messages = undefined;
        // when
        component.ngOnInit();
        // then
        expect(component.messages.length).toBeGreaterThan(1);
      });


});


});
