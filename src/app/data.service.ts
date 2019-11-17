import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  private fruits: Array<string> = ['🍎', '🍊', '🥭', '🍇', '🍐', '🍑'];

  getFruits() {
    return this.fruits;
  }

  setFruits(fruits: Array<string>) {
    this.fruits = fruits;
  }
}
