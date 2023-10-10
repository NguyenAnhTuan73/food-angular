import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  constructor(private foodService: FoodService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log('params>>>>>', params)
      if (params['searchName']) {
        this.foods = this.foodService
          .getAllFoodsBySearchTerm(params['searchName']);
      }else if(params['tag']){
        this.foods = this.foodService.getAllFoodsByTag(params['tag'])
      }else{
        this.foods = this.foodService.getAll()
      }
    });

  }
}
