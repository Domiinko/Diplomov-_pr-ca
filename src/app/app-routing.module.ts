import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { BodyComponent } from "./body/body.component";
import { MainComponent } from "./main/main.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import {FooterComponent} from "./footer/footer.component";
import {SliderComponent} from "./slider/slider.component";
import {NavComponent} from "./nav/nav.component";
import {SmartBandInfoComponent} from "./smart-band-info/smart-band-info.component";
import {SmartWatchInfoComponent} from "./smart-watch-info/smart-watch-info.component";
import {SmartScaleInfoComponent} from "./smart-scale-info/smart-scale-info.component";
import {SmartBarometerInfoComponent} from "./smart-barometer-info/smart-barometer-info.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import { PublicComponent } from './public/public.component';
import {SmartRopeInfoComponent} from "./smart-rope-info/smart-rope-info.component";
import {StatisticaComponent} from "./statistica/statistica.component";

const routes: Routes = [
  { path: 'Header', component: HeaderComponent },
  { path: 'Nav', component: NavComponent },
  { path: 'Body', component: BodyComponent },
  { path: 'Slider', component: SliderComponent },
  { path: 'Main', component: MainComponent },
  { path: 'Public', component: PublicComponent },
  { path: 'SmartBnadInfo', component: SmartBandInfoComponent },
  { path: 'SmartRopeInfo', component: SmartRopeInfoComponent },
  { path: 'SmartWatchInfo', component: SmartWatchInfoComponent },
  { path: 'SmartScaleInfo', component: SmartScaleInfoComponent },
  { path: 'SmartBarometerInfo', component: SmartBarometerInfoComponent },
  { path: 'Footer', component: FooterComponent },
  { path: 'Welcome', component: WelcomeComponent },
  { path: 'Statistica', component: StatisticaComponent },
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  //{ path: '**', redirectTo: '/Welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, RegisterComponent, HeaderComponent, NavComponent,StatisticaComponent,  BodyComponent,SmartRopeInfoComponent, MainComponent, WelcomeComponent,PublicComponent, FooterComponent, SliderComponent, SmartBandInfoComponent, SmartWatchInfoComponent, SmartScaleInfoComponent, SmartBarometerInfoComponent];
