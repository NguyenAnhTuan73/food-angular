import { Component, OnInit } from '@angular/core';
import { Foods } from './../shared/models/food';
import { FoodService } from '../services/food/food.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss'],
})
export class FoodPageComponent implements OnInit {
  food!: Foods;
  constructor(
    private foodService: FoodService,
    private activateRoute: ActivatedRoute,
    private cartService: CartService,
    private router: Router
  ) {
    activateRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food = foodService.getFoodById(params['id']);
        console.log(this.food);
      }
    });
  }

  ngOnInit(): void {}

  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }
}
