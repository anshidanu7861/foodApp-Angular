import { Injectable } from '@angular/core';
import {Food} from '../../shared/models/Food'

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return[
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['italy'],
        stars: 4.5,
        imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?cs=srgb&dl=pexels-ella-olsson-1640777.jpg&fm=jpg",
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['persia', 'middle east', 'china'],
        stars: 4.7,
        imageUrl:  "https://static01.nyt.com/images/2023/07/12/multimedia/06Tanis1-mzgw/06Tanis1-mzgw-threeByTwoMediumAt2X.jpg",
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['germany', 'us'],
        stars: 3.5,
        imageUrl:     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjrUTWfm63Q6TvpVr6LDiTn0l-vDwcMmLBuSSSsQ7nr-tFUcZRQXxYtuzBmYSJsn83-og&usqp=CAU",
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['belgium', 'france'],
        stars: 3.3,
        imageUrl:  "https://www.nhlbi.nih.gov/sites/default/files/styles/16x9_crop/public/2020-07/Heart%20healthy%20foods%20-%20shutterstock_624180923.jpg?h=4677f108&itok=JcbD1R5M",
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['india', 'asia'],
        stars: 3.0,
        imageUrl:  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '40-50',
        favorite: false,
        origins: ['italy'],
        stars: 4.0,
        imageUrl:   "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_649541308_20191010160155.png",
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
    ]
  }
}
