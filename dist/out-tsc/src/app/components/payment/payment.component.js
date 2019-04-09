import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users/users.service';
import Swal from 'sweetalert2';
var PaymentComponent = /** @class */ (function () {
    function PaymentComponent(userService) {
        this.userService = userService;
        this.showSuccess = false;
        this.showCancel = false;
        this.showError = false;
        this.npmCode = "npm install ngx-paypal --save";
    }
    ;
    PaymentComponent.prototype.ngOnInit = function () {
        this.initConfig();
    };
    PaymentComponent.prototype.ngAfterViewInit = function () {
        this.prettify();
    };
    PaymentComponent.prototype.updateUser = function () {
        var _this = this;
        this.userService.getUser("00000000-0000-0000-0000-000000000000").subscribe(function (x) {
            _this.loggedInUser = x;
            console.log(_this.loggedInUser);
        }, function (error) {
            console.log("Failed...");
        });
        this.loggedInUser.isMember = 1;
        this.userService.updateUser(this.loggedInUser).subscribe(function (x) {
            Swal.fire('Success', 'Operation was successfule');
        }, function (error1) {
            Swal.fire('Error', 'Operation was unsuccessful');
        });
    };
    PaymentComponent.prototype.initConfig = function () {
        var _this = this;
        this.payPalConfig = {
            currency: 'EUR',
            clientId: 'AXoM43qq23a4XRi3hmDVCmFZbcACephAKgGfTiOkXcwvO8gM5hP-e4GdKdU9TjFQT4wiHztF-qrlILh8',
            createOrderOnClient: function (data) { return ({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'EUR',
                            value: '9.99',
                            breakdown: {
                                item_total: {
                                    currency_code: 'EUR',
                                    value: '9.99'
                                }
                            }
                        },
                        items: [
                            {
                                name: 'Enterprise Subscription',
                                quantity: '1',
                                category: 'DIGITAL_GOODS',
                                unit_amount: {
                                    currency_code: 'EUR',
                                    value: '9.99',
                                },
                            }
                        ]
                    }
                ]
            }); },
            advanced: {
                commit: 'true'
            },
            style: {
                label: 'paypal',
                layout: 'vertical'
            },
            onApprove: function (data, actions) {
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then(function (details) {
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });
            },
            onClientAuthorization: function (data) {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                _this.showSuccess = true;
                _this.updateUser();
            },
            onCancel: function (data, actions) {
                console.log('OnCancel', data, actions);
                _this.showCancel = true;
            },
            onError: function (err) {
                console.log('OnError', err);
                _this.showError = true;
            },
            onClick: function () {
                console.log('onClick');
                _this.resetStatus();
            },
        };
    };
    PaymentComponent.prototype.resetStatus = function () {
        this.showError = false;
        this.showSuccess = false;
        this.showCancel = false;
    };
    PaymentComponent.prototype.prettify = function () {
        hljs.initHighlightingOnLoad();
    };
    PaymentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-payment',
            templateUrl: './payment.component.html',
            styleUrls: ['./payment.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [UsersService])
    ], PaymentComponent);
    return PaymentComponent;
}());
export { PaymentComponent };
//# sourceMappingURL=payment.component.js.map