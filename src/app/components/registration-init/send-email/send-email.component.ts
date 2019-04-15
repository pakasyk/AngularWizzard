import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-send-email",
  templateUrl: "./send-email.component.html",
  styleUrls: ["./send-email.component.scss"]
})
export class SendEmailComponent implements OnInit {
  messageWelcome: string = "Welcome Message";
  constructor() {}
  emailInput = new FormControl(
    "",
    Validators.compose([Validators.required, Validators.email])
  );
  @Input() email: string;

  @Output() emailEvent = new EventEmitter<object>();
  ngOnInit(): void {}
  onEmailSubmit(email: string) {
    this.emailEvent.emit({ email, submited: true });
  }
}
