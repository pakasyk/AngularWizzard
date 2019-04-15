import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-step1",
  templateUrl: "./step1.component.html",
  styleUrls: ["./step1.component.scss"]
})
export class Step1Component implements OnInit {
  step1Form: FormGroup;

  get checkbox() {
    return this.step1Form.get("checkbox");
  }
  get pep() {
    return this.step1Form.get("pep");
  }
  nationalities = ["Lithuanian", "Latvian", "Polish"];
  positions = ["President", "Ambassador"];
  affiliations = ["Business Owner", "Private Bank"];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.step1Form = this.fb.group({
      affiliation: [this.affiliations[0], [Validators.required]],
      name: ["", [Validators.required]],
      surname: ["", [Validators.required]],
      personalCode: ["", [Validators.required]],
      checkbox: [false],
      nationality: ["", [Validators.required]],
      pep: [""],
      rolePosition: [""]
    });

    /* Dependant Personal Code Validation */
    this.step1Form.get("checkbox").valueChanges.subscribe(checkedValue => {
      const personalCode = this.step1Form.get("personalCode");
      if (checkedValue) {
        personalCode.clearValidators();
      } else {
        personalCode.setValidators(Validators.required);
      }
      personalCode.updateValueAndValidity();
    });
    /* Dependant Role/Position Validation */
    this.step1Form.get("pep").valueChanges.subscribe(checkedValue => {
      const rolePosition = this.step1Form.get("rolePosition");
      if (checkedValue === "true") {
        rolePosition.setValidators(Validators.required);
      } else {
        rolePosition.clearValidators();
      }
      rolePosition.updateValueAndValidity();
    });
  }
}
