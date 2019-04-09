import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserModel } from 'src/app/shared/models/UserModel';
import { weatherCheckBox } from 'src/app/shared/models/weatherCheckBox';
var UsersSignInComponent = /** @class */ (function () {
    function UsersSignInComponent(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UsersSignInComponent.prototype.ngOnInit = function () {
        this.user = new UserModel();
        this.checkBoxes = [new weatherCheckBox(false, 'Min/Max Temperatue'),
            new weatherCheckBox(false, 'Weather'),
            new weatherCheckBox(false, 'Weathern Desc'),
            new weatherCheckBox(false, 'Humidity'),
            new weatherCheckBox(false, 'wind Speed'),
            new weatherCheckBox(false, 'Wind Degrees')];
    };
    UsersSignInComponent.prototype.OnSubmit = function () {
        var _this = this;
        this.userService.userAuthentication(this.user).subscribe(function (data) {
            localStorage.setItem('userToken', data.access_token);
            _this.userService.getUserClaims();
            _this.router.navigate(['/weather/', JSON.stringify(_this.checkBoxes)]);
            Swal.fire('Success', ' Logged in successfully');
        }, function (error) {
            Swal.fire('Error', 'login unsuccesfully');
        });
    };
    UsersSignInComponent.prototype.check = function (checkBoxValue) {
        if (checkBoxValue.isChecked == false) {
            checkBoxValue.isChecked = true;
        }
        else {
            checkBoxValue.isChecked = false;
        }
    };
    UsersSignInComponent = tslib_1.__decorate([
        Component({
            selector: 'app-users-sign-in',
            templateUrl: './users-sign-in.component.html',
            styleUrls: ['./users-sign-in.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UsersService, Router])
    ], UsersSignInComponent);
    return UsersSignInComponent;
}());
export { UsersSignInComponent };
//# sourceMappingURL=users-sign-in.component.js.map