import { HomeComponent } from './home/home.component';
import { NgModule, } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { TravelComponent } from './travel/travel.component';
import { ContactComponent } from './contact/contact.component';
import { RestaurantComponent } from './services/restaurant/restaurant.component';
import { TaxiComponent } from './services/taxi/taxi.component';
import { LoungeComponent } from './services/lounge/lounge.component';
import { CoffeeComponent } from './services/coffee/coffee.component';
import { WeddingComponent } from './services/wedding/wedding.component';
import { RoomsComponent } from './services/rooms/rooms.component';
import { ServiceComponent } from './service/service.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
 
  {path:'travel',component:TravelComponent},
  {path:'contact',component:ContactComponent},
  {path:'service',component:ServiceComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},

  {path:'services',
  children:[
    {path:'restaurants',component:RestaurantComponent},
    {path:'taxi',component:TaxiComponent},
    {path:'lounge',component:LoungeComponent},
    {path:'coffee',component:CoffeeComponent},
    {path:'rooms',component:RoomsComponent},
    {path:'wedding',component:WeddingComponent},



  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
