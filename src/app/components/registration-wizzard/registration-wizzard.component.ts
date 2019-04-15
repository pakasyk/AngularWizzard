import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-registration-wizzard",
  templateUrl: "./registration-wizzard.component.html",
  styleUrls: ["./registration-wizzard.component.scss"]
})
export class RegistrationWizzardComponent implements OnInit {
  step: number = 1;
  stepsTotal: number = 6;
  email: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    /* Getting email from URL params */
    this.route.queryParams.subscribe(
      email => (this.email = email.email.substring(1, email.email.length - 1))
    );
  }

  onNextClick() {
    this.step++;
  }
  onPrevClick() {
    this.step--;
  }
}
