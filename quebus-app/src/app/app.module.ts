import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MaterializeModule } from 'angular2-materialize';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { ForbiddenInterceptor } from './core/interceptors/forbidden.interceptor';
import { LoaderInterceptor } from './core/interceptors/loader.interceptor';
import { UnauthorizedInterceptor } from './core/interceptors/unauthorized.interceptor';
import { TokenInterceptor } from './core/interceptors/token.inteceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterializeModule,
    ToastrModule.forRoot(),
    // NgxLoadingModule.forRoot({}),
    HttpClientModule,
    PagesModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: UnauthorizedInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ForbiddenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
