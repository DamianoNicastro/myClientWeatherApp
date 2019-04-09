import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersAddComponent } from './components/users/users-add/users-add.component';
import { UsersSignInComponent } from './components/users/users-sign-in/users-sign-in.component';
import { WeaterDisplayComponent } from './components/weather/weater-display/weater-display.component';
import { AuthGuard } from './auth/auth.guard';
import { PaymentComponent } from './components/payment/payment.component';
var routes = [
    { path: 'users/create', component: UsersAddComponent },
    { path: 'users/login', component: UsersSignInComponent },
    { path: 'weather/:object', component: WeaterDisplayComponent, canActivate: [AuthGuard] },
    { path: 'payment/paypal', component: PaymentComponent },
    { path: '', redirectTo: 'Users/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map