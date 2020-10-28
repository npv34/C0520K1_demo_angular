import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  message: string
  constructor() { }

  setMessage(value) {
    this.message = value;
  }

  getMessage() {
    return this.message;
  }
}
