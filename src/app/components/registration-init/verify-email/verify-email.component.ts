import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-verify-email",
  templateUrl: "./verify-email.component.html",
  styleUrls: ["./verify-email.component.scss"]
})
export class VerifyEmailComponent implements OnInit {
  constructor(private router: Router) {}

  @Input() email: string;
  @Output() emailEvent = new EventEmitter<object>();

  onSendAgainClick() {
    this.emailEvent.emit({ email: this.email, submited: false });
  }

  onCloseWindowClick() {
    this.router.navigate(["wizzard"], {
      queryParams: { email: JSON.stringify(this.email) }
    });
  }

  ngOnInit() {}
}
