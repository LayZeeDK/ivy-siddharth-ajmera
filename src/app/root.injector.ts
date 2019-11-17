import {
  ComponentFactoryResolver,
  ErrorHandler,
  Injector,
  NgZone,
  StaticProvider,
  ɵcreateInjector as createInjector,
  ɵNoopNgZone as NoopNgZone,
} from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const browserPlatform = platformBrowser();
const ngZoneInjector = Injector.create([
  {
    deps: [],
    provide: NgZone,
    useFactory: (): NgZone =>
      new NoopNgZone,
  },
], browserPlatform.injector);
const extraProviders: StaticProvider[] = [
  {
    deps: [],
    provide: ErrorHandler,
    useClass: ErrorHandler,
  },
  {
    provide: ComponentFactoryResolver,
    useValue: ComponentFactoryResolver.NULL,
  },
];
export const rootInjector = createInjector(
  BrowserAnimationsModule,
  ngZoneInjector,
  extraProviders,
  'root');
