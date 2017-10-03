import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AlertWarningComponent } from './alert-warning/alert-warning.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertWarningComponent,
    AlertSuccessComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }