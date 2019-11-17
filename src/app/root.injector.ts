import { Injector } from '@angular/core';

import { DataService } from './data.service';

export const rootInjector = Injector.create({
  name: 'root',
  parent: Injector.NULL,
  providers: [
    {
      deps: [],
      provide: DataService,
      useClass: DataService,
    },
  ],
});
