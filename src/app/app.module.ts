import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { YjsComponent } from './yjs/yjs.component';
import { DemoComponent } from './todo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    YjsComponent,
    DemoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
