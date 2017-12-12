import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesComponent } from './messages.component';
import { Component } from '@angular/core/src/metadata/directives';

describe('MessagesComponent Tests', () => {
  let component: MessagesComponent;
  let fixture: ComponentFixture<MessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('defaults', () => {    
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('should contain li element',() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('li').textContent).toBeTruthy();
    });
  });
    
  // regroupement de tests
  // # convention Jasmine pour identifier les methodes
  describe('#ngOnInit', () => {
   
    it('should set default values', ()=> {
      // given
      component.message = undefined;
      // when
      component.ngOnInit();
      // then
      expect(component.message.author).toBeDefined();
      expect(component.message.content).toBeDefined();
 });
  });
});
