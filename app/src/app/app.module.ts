import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouteReuseStrategy, RouterModule } from "@angular/router";
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { FixedSizeVirtualScrollStrategy, RxVirtualFor, RxVirtualScrollViewportComponent } from "@rx-angular/template/experimental/virtual-scrolling";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FirstPageComponent } from "./ui/first-page/first-page.component";

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
  ],
  imports: [
    RxVirtualFor, 
    RxVirtualScrollViewportComponent, 
    FixedSizeVirtualScrollStrategy,
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    IonicModule.forRoot({
      swipeBackEnabled: true,
      animated: true,
      mode: 'ios',
    }),
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {}
}
