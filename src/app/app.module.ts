import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewTransferenceComponent } from './new-transference/new-transference.component';
import { ExtractComponent } from './extract/extract.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTransferenceComponent,
    ExtractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
