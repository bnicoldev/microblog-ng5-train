import { TestBed, inject } from '@angular/core/testing';
import { MessageStoreService } from './message-store.service';

describe('MessageStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageStoreService]
    });
  });

  it('should be created', inject([MessageStoreService], (service: MessageStoreService) => {
    expect(service).toBeTruthy();
  }));

  describe('#addMessage', inject([MessageStoreService], (service: MessageStoreService)=>{
    it('should add 1 message to the messages array', inject([MessageStoreService]
        , (service: MessageStoreService) => {
      //given
      let nb = service.messageStore.length;
      //when
      service.addMessage({author:'test',content:'test'});
      let nbafter = service.messageStore.length;
      //then
     expect(nbafter).toEqual(nb + 1);

    }));
    
  }));
});
