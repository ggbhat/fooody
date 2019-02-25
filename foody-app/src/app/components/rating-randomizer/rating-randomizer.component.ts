import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rating-randomizer',
  templateUrl: './rating-randomizer.component.html',
  styleUrls: ['./rating-randomizer.component.scss']
})
export class RatingRandomizerComponent implements OnInit {
  @Output() randomize: EventEmitter<any> = new EventEmitter();
  random = false;
  constructor() { }

  ngOnInit() {
   
  }

  randomizeClick(randomize){
    this.randomize.emit(randomize);
  }
  
}
