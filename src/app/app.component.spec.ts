import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessagesComponent } from './message-list/messages/messages.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { FormsModule } from '@angular/forms';
import { MessageStoreService } from './shared/message-store.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        MessageListComponent,
        MessagesComponent,
        MessageInputComponent
      ],
      providers: [MessageStoreService]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Microblog!');
  }));
});
