import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: window.navigator.language.toLowerCase(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
