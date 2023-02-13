import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { TravelComponent } from './travel/travel.component';
import { ContactComponent } from './contact/contact.component';
import { SidebarComponent } from './common/sidebar/sidebar.component';
import { RestaurantComponent } from './services/restaurant/restaurant.component';
import { TaxiComponent } from './services/taxi/taxi.component';
import { WeddingComponent } from './services/wedding/wedding.component';
import { CoffeeComponent } from './services/coffee/coffee.component';
import { LoungeComponent } from './services/lounge/lounge.component';
import { RoomsComponent } from './services/rooms/rooms.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    TravelComponent,
    ContactComponent,
    SidebarComponent,
    RestaurantComponent,
    TaxiComponent,
    WeddingComponent,
    CoffeeComponent,
    LoungeComponent,
    RoomsComponent,
    ServiceComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
