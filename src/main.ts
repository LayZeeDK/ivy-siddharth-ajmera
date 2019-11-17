import {
  ɵLifecycleHooksFeature as LifecycleHooksFeature,
  ɵrenderComponent as renderComponent,
} from '@angular/core';

import { AppComponent } from './app/app.component';
import { rootInjector } from './app/root.injector';

renderComponent(AppComponent, {
  hostFeatures: [
    LifecycleHooksFeature,
  ],
  injector: rootInjector,
});
