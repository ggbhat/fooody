import {  Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//import { Observable,of } from 'rxjs';
import * as rx from 'rxjs';
import { switchMap,repeat, mapTo } from 'rxjs/operators';
import {FoodyService} from '../../services/foody-service.service';
import { Food } from '../../models/food';

@Component({
  selector: 'app-foody-list',
  templateUrl: './foody-list.component.html',
  styleUrls: ['./foody-list.component.scss']
})
export class FoodyListComponent implements OnInit {
  foods: Food[];
  subscriber:any;
  ratingClicked: number;
  itemIdRatingClicked: string;
  constructor(private foodyService:FoodyService) { }


  ngOnInit() {
    this.foodyService.getFoods().subscribe(Food => {
      this.foods =  Food.sort((a, b) => b.rating - a.rating);
    });
  }

  ratingComponentClick(clickObj: any): void {
    ///console.log(clickObj)
    const item = this.foods.find(((i: any) => i.id === clickObj.itemId));
    if (!!item) {
      item.rating = clickObj.rating;
      this.foods.sort((a, b) => b.rating - a.rating);
    }

  }
  getRandomDelay() {
    return (Math.floor(Math.random() * (5 - 1 + 1)) + 1) * 100;
  }
  //randomizer = timer(this.getRandomDelay()).pipe(repeat())
  
  
  randomizer = rx.of("").pipe(switchMap(() => rx
  .timer(this.getRandomDelay()).pipe(mapTo(this.getRandomDelay()))
))
.pipe(repeat());
  

  

 
  randomize(rando) {
    console.log(rando)
    
    if(rando) {
    this.subscriber = this.randomizer
  .subscribe(
    n =>{ 
      this.foods[(Math.floor(Math.random() * (this.foods.length - 1 + 1)) + 1) - 1].rating =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;
      // for(let i=0;i<this.foods.length;i++) {
      //     this.foods[i].rating =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;
      //   }
        this.foods.sort((a, b) => b.rating - a.rating);
        console.log(n);
    }
  
  );
}
else {
  //console.log(this.subscriber)
  this.subscriber.unsubscribe();
}
    
   
  }
  // {
  //   for(let i=0;i<this.foods.length;i++) {
  //     this.foods[i].rating =  Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  //   }
  //   this.foods.sort((a, b) => b.rating - a.rating);
  //     //this.todos.push(todo);
  // }
}
