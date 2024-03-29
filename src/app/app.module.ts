import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpConfigInterceptor } from './_interceptors/httpConfig.interceptor';



@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({
    }),
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
    
   ],
    providers: [
  { 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy 
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpConfigInterceptor,
    multi: true
  },
],

  
  bootstrap: [AppComponent],
})
export class AppModule { }
