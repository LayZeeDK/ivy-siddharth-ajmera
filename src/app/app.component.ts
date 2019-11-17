import {
  Component,
  NgModule,
  ɵLifecycleHooksFeature as LifecycleHooksFeature,
  ɵmarkDirty as markDirty,
  ɵrenderComponent as renderComponent,
} from '@angular/core';

import { DataService } from './data.service';
import { rootInjector } from './root.injector';

@Component({
  selector: 'app-root',
  template: `
  <h1>
    Hey! 👋🏼 {{ name }} here.
  </h1>
  <button (click)="changeName()">Change Name</button>
  <hr />
  <app-dynamic>
    <button (click)="loadDynamicComponent()">Load Dynamic Component</button>
  </app-dynamic>
  `,
  styles: []
})
export class AppComponent {
  name = 'Sidd 👨‍💻';

  constructor(
    private dataService: DataService,
  ) {}

  ngOnInit() {
    this.dataService.setFruits(['🥝', '🍐', '🍋', '🍌', '🍍']);
  }

  changeName() {
    this.name = `Ivy 🍃🌱`;
    markDirty(this);
  }

  loadDynamicComponent() {
    import('./dynamic.component').then(({ DynamicComponent }) => {
      renderComponent(DynamicComponent, {
        hostFeatures: [
          LifecycleHooksFeature,
        ],
        injector: rootInjector,
      });
    });
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
})
export class AppRenderModule {}
