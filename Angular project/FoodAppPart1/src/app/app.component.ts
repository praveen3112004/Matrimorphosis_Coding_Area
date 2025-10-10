import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'FoodAppPart1';
  foodName: string = 'Margherita Pizza';
  foodImage: string ='../images/pizza.jpeg';
  foodPrice: number = 299;
  orderNow() {
    alert(`${this.foodName} has been added to your cart`);
  }
}