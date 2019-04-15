import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-registration-init",
  templateUrl: "./registration-init.component.html",
  styleUrls: ["./registration-init.component.scss"]
})
export class RegistrationInitComponent implements OnInit {
  submited: boolean = false;

  email: string;
  receiveEmail(email: { email: string; submited: boolean }) {
    this.email = email.email;
    this.submited = email.submited;
  }
  constructor() {}

  ngOnInit() {}
}
