import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPayPalModule } from 'ngx-paypal';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersAddComponent } from './components/users/users-add/users-add.component';
import { UsersService } from './shared/services/users/users.service';
import { WeatherDataService } from './shared/services/weather-data/weather-data.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersSignInComponent } from './components/users/users-sign-in/users-sign-in.component';
import { WeaterDisplayComponent } from './components/weather/weater-display/weater-display.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { PaymentComponent } from './components/payment/payment.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                UsersAddComponent,
                UsersSignInComponent,
                WeaterDisplayComponent,
                PaymentComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule, HttpClientModule, FormsModule, NgxPayPalModule
            ],
            providers: [UsersService, WeatherDataService, AuthGuard, {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true
                }],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map