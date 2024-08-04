import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {CardComponent} from "./components/card/card.component";
import {ProductModel} from "./models/product.model";
import {createWebpackLoggingCallback} from "@angular-devkit/build-angular/src/tools/webpack/utils/stats";
import {StoreService} from "./services/store.service";
import {CartComponent} from "./components/cart/cart.component";
import {TotalcostComponent} from "./components/totalcost/totalcost.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, NavbarComponent, CardComponent, CartComponent, TotalcostComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = "hello"

  constructor(public storeService: StoreService) {
    console.log(this.storeService.products)
  }


  // stuff = ["đi chợ", "Mua đồ ăn", "Học Bài","Đi ngủ"];
  // completedStuff: string[] = [];

  // newStuff ="";
  // deletedStuff =""
  // addtodolist (){
  //   this.stuff.push(this.newStuff);
  // }

  // deletetodolist (item :number = 0){
  //   this.stuff.splice(item,1);
  // }

  // completetodolist (item :string = "",index :number = 0){
  //   this.deletetodolist (index);
  //   this.completedStuff.push(item);
  // }


  // addtocart(item: any) {
  //
  // }

}
