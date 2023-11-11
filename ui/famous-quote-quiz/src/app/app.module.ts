import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './core/navbar/navbar.component';
import { QuoteListComponent } from './quote/quote-list/quote-list.component';
import { AddQuoteComponent } from './quote/add-quote/add-quote.component';
import { QuoteContainerComponents } from './quote/quote-container/quote-container.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    QuoteListComponent,
    AddQuoteComponent,
    QuoteContainerComponents,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
