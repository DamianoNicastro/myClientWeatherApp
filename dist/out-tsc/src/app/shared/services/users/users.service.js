import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.baseUrl = environment.BaseAddress;
        this.reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
        this.currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    UsersService.prototype.getUser = function (usedId) {
        return this.http.get(this.baseUrl + 'api/users/getuser/' + usedId);
    };
    UsersService.prototype.addUser = function (user) {
        return this.http.post(this.baseUrl + 'api/users/create', user, { headers: this.reqHeader });
    };
    UsersService.prototype.updateUser = function (user) {
        return this.http.post(this.baseUrl + 'api/users/update', user, { headers: this.reqHeader });
    };
    UsersService.prototype.userAuthentication = function (user) {
        var data = "username=" + user.email + "&password=" + user.password + "&grant_type=password";
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'No-Auth': 'True' });
        return this.http.post(this.baseUrl + '/token', data, { headers: reqHeader });
    };
    UsersService.prototype.getUserClaims = function () {
        var _this = this;
        this.http.get(this.baseUrl + 'api/Users/GetUserClaims')
            .pipe(map(function (user) {
            if (user) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log("Current user: " + localStorage.getItem);
                _this.currentUserSubject.next(user);
            }
        }));
    };
    UsersService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], UsersService);
    return UsersService;
}());
export { UsersService };
//# sourceMappingURL=users.service.js.map