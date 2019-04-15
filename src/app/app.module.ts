import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SideComponent } from "./components/shared/side/side.component";
import { RegistrationInitComponent } from "./components/registration-init/registration-init.component";
import { SendEmailComponent } from "./components/registration-init/send-email/send-email.component";
import { VerifyEmailComponent } from "./components/registration-init/verify-email/verify-email.component";
import { RegistrationWizzardComponent } from "./components/registration-wizzard/registration-wizzard.component";
import { Step1Component } from './components/registration-wizzard/step1/step1.component';

@NgModule({
  declarations: [
    AppComponent,
    SideComponent,
    RegistrationInitComponent,
    SendEmailComponent,
    VerifyEmailComponent,
    RegistrationWizzardComponent,
    Step1Component
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
