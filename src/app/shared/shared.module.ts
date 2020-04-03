import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ErrorComponent } from "./error.component";
import { HomeComponent } from "./home.component";
import { ContactComponent } from "./contact.component";
import { AdminComponent } from "./admin.component";

@NgModule({
  declarations: [
    AdminComponent,
    ContactComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [CommonModule]
})
export class SharedModule {}
