import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UserModel } from 'src/app/shared/models/UserModel';
import { UsersService } from 'src/app/shared/services/users/users.service';
import Swal from 'sweetalert2';
var UsersAddComponent = /** @class */ (function () {
    function UsersAddComponent(userService) {
        this.userService = userService;
    }
    UsersAddComponent.prototype.ngOnInit = function () {
        this.model = new UserModel();
    };
    UsersAddComponent.prototype.Register = function () {
        var _this = this;
        this.userService.addUser(this.model).subscribe(function (x) {
            Swal.fire('Success', _this.model.email + ' added successfully');
        }, function (error) {
            Swal.fire('Error', 'Something wring happened');
        });
    };
    UsersAddComponent = tslib_1.__decorate([
        Component({
            selector: 'app-users-add',
            templateUrl: './users-add.component.html',
            styleUrls: ['./users-add.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UsersService])
    ], UsersAddComponent);
    return UsersAddComponent;
}());
export { UsersAddComponent };
//# sourceMappingURL=users-add.component.js.map