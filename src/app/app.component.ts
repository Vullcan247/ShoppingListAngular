import { Component } from "@angular/core";
import { ShopService } from "./shop.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  listName: string;
  submitList(): void {
    // somehow will save data
    console.log("submit");
    this.shopService.addList({ name: this.listName }).subscribe();
  }
  constructor(private shopService: ShopService) {}
}
