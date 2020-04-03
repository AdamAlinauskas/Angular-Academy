import { map, flatMap, filter } from "rxjs/operators";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "./../product.service";
import { Component, OnInit, Input } from "@angular/core";
import { Product } from "./../product.interface";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
  @Input()
  product: Product;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.params["id"];
    console.info("product detail component " + id);
    this.productService.products$
      .pipe(
        //map((products) => products.find((p) => p.id === id))
        flatMap((p) => p), //convert from array to stream of objects
        filter((product) => product.id === id)
      )

      .subscribe((result) => (this.product = result));
  }
}
