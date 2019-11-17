import { Injector } from '@angular/core';

import { DataService } from './data.service';
import { rootInjector } from './root.injector';

export const appInjector = Injector.create({
  name: 'app',
  parent: rootInjector,
  providers: [
    {
      deps: [],
      provide: DataService,
      useClass: DataService,
    },
  ],
});
