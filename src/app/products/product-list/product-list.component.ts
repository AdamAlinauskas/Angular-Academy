import { Observable, EMPTY } from "rxjs";
import { ProductService } from "./../product.service";
import { Product } from "./../product.interface";
import { Component, OnInit } from "@angular/core";
import { catchError } from "rxjs/operators";
// import { catchError, delay, shareReplay, tap, map } from "rxjs/operators";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
  title: string = "Products";
  products: Product[];
  selectedProduct: Product;
  products$: Observable<Product[]>;
  errorMessage: string;

  //Pagination
  pageSize = 5;
  start = 0;
  end = this.pageSize;
  currentPage = 1;

  nextPage(): void {
    this.start += this.pageSize;
    this.end += this.pageSize;
    this.currentPage++;
    this.selectedProduct = null;
  }

  previousPage(): void {
    this.start -= this.pageSize;
    this.end -= this.pageSize;
    this.currentPage--;
    this.selectedProduct = null;
  }

  onSelect(product: Product) {
    console.log(product);
    this.selectedProduct = product;
  }

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products$ = this.productService.products$.pipe(
      catchError(error => {
        this.errorMessage = error;
        return EMPTY;
      })
    );

    // this.productService.products$.subscribe(
    //   results => (this.products = results)
    // );
  }
}
