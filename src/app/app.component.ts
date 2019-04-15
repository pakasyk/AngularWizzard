import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client-registration';
  messageInput: string = "labadiena";

  receiveEmail($event) {
    this.messageInput = $event
  }
}
