import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { LectureOneModule } from './lecture-one/lecture-one.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LectureOneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
