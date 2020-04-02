import { ProductService } from "./../product.service";
import { Product } from "./../product.interface";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  title: string = "Products";
  products: Product[];
  selectedProduct: Product;

  onSelect(product: Product) {
    console.log(product);
    this.selectedProduct = product;
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
