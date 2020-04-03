import { FormsModule } from "@angular/forms";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
  declarations: [ProductDetailComponent, ProductListComponent],
  imports: [CommonModule, ProductsRoutingModule, FormsModule],
  exports: [ProductListComponent]
})
export class ProductsModule {}
