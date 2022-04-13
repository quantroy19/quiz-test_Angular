import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private message = new BehaviorSubject('');
  currentMess = this.message.asObservable();
  constructor() {}
  sentMess(message: any) {
    this.message.next(message);
  }
}

// eInjectable ()
// export class SharedService (
// private message =new BehaviorSubject ('Default')
// currentMess - this.message.asCbservable (:
//   constractor () {)
// change (nessage: string) (
//   this.nessagge.next (message):
