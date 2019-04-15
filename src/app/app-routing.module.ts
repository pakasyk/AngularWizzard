import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RegistrationInitComponent } from "./components/registration-init/registration-init.component";
import { RegistrationWizzardComponent } from "./components/registration-wizzard/registration-wizzard.component";

const routes: Routes = [
  { path: "", component: RegistrationInitComponent },
  { path: "wizzard", component: RegistrationWizzardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
