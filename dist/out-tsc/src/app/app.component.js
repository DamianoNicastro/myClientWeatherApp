import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from './shared/services/users/users.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(router, userService) {
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.title = 'myClientWeatherApp';
        this.userService.currentUser.subscribe(function (x) {
            _this.currentUser = x;
            console.log("In Success " + _this.currentUser);
        }, function (error) {
            console.log("Failed.");
        });
    }
    AppComponent.prototype.Logout = function () {
        localStorage.removeItem('userToken');
        localStorage.removeItem('LoggedInUser');
        this.router.navigate(['/users/login']);
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [Router, UsersService])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map