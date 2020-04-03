import { ContactComponent } from "./shared/contact.component";
import { ErrorComponent } from "./shared/error.component";
import { AdminComponent } from "./shared/admin.component";
import { HomeComponent } from "./shared/home.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "admin", component: AdminComponent },
  {
    path: "products",
    loadChildren: () =>
      import("./products/products.module").then((m) => m.ProductsModule),
  },

  { path: "**", component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
