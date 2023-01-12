import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {


  constructor() { }
  getFoodById(id:number):Foods{
    return this.getAll().find(food=>food.id==id)!;
  }
  getAllFoodByTag(tag:string):Foods[] {
return tag == "All" ?
this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }
  getAllTag():Tag[]{
    return[
      {name:'All',count:14},
      {name:'FastFood',count:3},
      {name:'Rasmalai',count:1},
      {name:'Meal',count:2},
      {name:'Kabab',count:1},
      {name:'Burger',count:1},
      {name:'Chole Bhature',count:1},
      {name:'Lunch',count:1},
    ]
  }
  getAll():Foods[]{
    return[
      {
        id:1,
        name:'Rasmalai',
        cookTime:'30-50',
        price:150,
        favourite:true,
        origins:['Indian','Germany','Dubai'],
        stars:4.5,
        imageUrl:'/assets/img10.png',
        tags:['Rasmalai','Lunch']
      },  
      {
        id:2,
        name:'Chole Bhature',
        cookTime:'20-30',
        price:100,
        favourite:false,
        origins:['italy','india','Dubai'],
        stars:3.5,
        imageUrl:'/assets/img2.jpg',
        tags:['Chole Bhature','Lunch']
      },
      {
        id:3,
        name:'Meal',
        cookTime:'30-40',
        price:120,
        favourite:true,
        origins:['Maharashta','Pune','Dubai'],
        stars:4.5,
        imageUrl:'/assets/img3.jpg',
        tags:['Meal','Lunch']
      },
      {
        id:4,
        name:'Fried Momos',
        cookTime:'25-30',
        price:180,
        favourite:false,
        origins:['italy','india','Dubai'],
        stars:3,
        imageUrl:'/assets/img11.webp',
        tags:['FastFood','Fried Momos','Lunch']
      },
      {
        id:5,
        name:'Meal',
        cookTime:'50-60',
        price:100,
        favourite:false,
        origins:['italy','india','Dubai'],
        stars:4.5,
        imageUrl:'/assets/img3.jpg',
        tags:['Meal','Lunch']
      },
      {
        id:6,
        name:'Hydrabadi Sweet',
        cookTime:'20-30',
        price:250,
        favourite:false,
        origins:['italy','india','Dubai'],
        stars:4.5,
        imageUrl:'/assets/img6.webp',
        tags:['Hydrabadi Sweet','Lunch']
      },
      {
        id:7,
        name:'Kabab',
        cookTime:'10-20',
        price:100,
        favourite:false,
        origins:['italy','india','Dubai'],
        stars:4.5,
        imageUrl:'/assets/img7.jpg',
        tags:['FastFood','Kabab','Lunch']
      },
      {
        id:8,
        name:'Burger',
        cookTime:'10-20',
        price:80,
        favourite:false,
        origins:['italy','india','Dubai'],
        stars:4.5,
        imageUrl:'/assets/img9.png',
        tags:['FastFood','Burger','Lunch']
      }
    ]
  }
}

