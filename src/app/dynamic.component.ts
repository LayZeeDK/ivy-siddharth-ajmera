import { NgForOf } from '@angular/common';
import { Component, NgModule, ɵmarkDirty as markDirty } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-dynamic',
  template: `
    <h1>
      'tis a Dynamic Component ⚡
    </h1>
    <button (click)="getFruits()">Get Fruits</button>
    <ul>
      <li *ngFor="let fruit of fruits">
        {{fruit}}
      </li>
    </ul>
  `,
})
export class DynamicComponent {
  fruits: Array<string>;

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit() {
    console.log('DynamicComponent:: ngOnInit 🚀');
  }

  getFruits() {
    this.fruits = this.dataService.getFruits();
    markDirty(this);
  }
}

@NgModule({
  declarations: [
    DynamicComponent,
    NgForOf,
  ],
})
class DynamicRenderModule {}
