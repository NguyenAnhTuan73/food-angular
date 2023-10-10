import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getAllFoodsByTag(tag: any): Foods[] {
    return tag == 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  getAllTags(): Tag[] {
    return [
      { name: 'All', count: 14 },
      { name: 'FastFood', count: 4 },
      { name: 'Pizza', count: 2 },
      { name: 'Lunch', count: 3 },
      { name: 'SlowFood', count: 2 },
      { name: 'Hamburger', count: 1 },
      { name: 'Fry', count: 1 },
      { name: 'Soup', count: 1 },
    ];
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 50,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/image/pic1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        cookTime: '10-20',
        price: 20,
        favorite: false,
        origins: ['singapo'],
        star: 4.5,
        imageUrl: '/assets/image/pic2.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        cookTime: '10-25',
        price: 30,
        favorite: false,
        origins: ['campuchia'],
        star: 4.5,
        imageUrl: '/assets/image/pic3.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        cookTime: '10-20',
        price: 40,
        favorite: false,
        origins: ['italy'],
        star: 4.5,
        imageUrl: '/assets/image/pic4.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        cookTime: '10-20',
        price: 50,
        favorite: true,
        origins: ['China'],
        star: 4.5,
        imageUrl: '/assets/image/pic5.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        cookTime: '10-20',
        price: 56,
        favorite: false,
        origins: ['indian'],
        star: 4.5,
        imageUrl: '/assets/image/pic6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Food7',
        cookTime: '10-20',
        price: 75,
        favorite: true,
        origins: ['Japan'],
        star: 4.5,
        imageUrl: '/assets/image/pic7.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 8,
        name: 'Food8',
        cookTime: '10-20',
        price: 58,
        favorite: false,
        origins: ['laos'],
        star: 4.5,
        imageUrl: '/assets/image/pic8.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ];
  }

  getAllFoodsBySearchTerm(searchName:string):Foods[]{
    return  this.getAll().filter(food=>{
      food.name.toLowerCase().includes(searchName.toLowerCase())
    })

  }
}
