import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { processSystemTime } from 'src/environments/systemTimeHandler';



function appInitializer() {
  return () => {
    return new Promise((resolve) => {
      processSystemTime().then(
        res => {
            console.log(res);
        }
      );
    });
  };
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializer,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
