import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { TypedFormsComponent } from './typed-forms/typed-forms/typed-forms.component';
import { InputComponent } from './reactive-forms-reusable/input/input.component';

@NgModule({
  declarations: [AppComponent, ReactiveFormsComponent, TypedFormsComponent, InputComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
