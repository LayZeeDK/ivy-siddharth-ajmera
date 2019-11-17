import {
  ɵLifecycleHooksFeature as LifecycleHooksFeature,
  ɵrenderComponent as renderComponent,
} from '@angular/core';

import { AppComponent } from './app/app.component';
import { appInjector } from './app/app.injector';

renderComponent(AppComponent, {
  hostFeatures: [
    LifecycleHooksFeature,
  ],
  injector: appInjector,
});
