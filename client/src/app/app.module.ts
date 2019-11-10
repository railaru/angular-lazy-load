import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApiService } from './services/api.service';
import { CardComponent } from './components/presentationals/card/card.component';
import { GridComponent } from './components/containers/grid/grid.component';
import { CardShimmerComponent } from './components/presentationals/card-shimmer/card-shimmer.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    GridComponent,
    CardShimmerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
