import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var PaymentService = /** @class */ (function () {
    function PaymentService(http) {
        this.http = http;
        this.client_id = "Acy4tA_yRySYQQte_sRT-Scjv6LzgRypaIz6FJfS5u8VsAiLFetL_Nf6T3o9AfWB02Qt0sgDD608A2-d";
        this.client_secret = "EIS9cJcy4BpuF2ug_GffKW0zYGtMEoNh_OkkzILU6Vv7liH2Dl4qcolnFAyrbaFsy-FApxzdhTjDReT1";
    }
    PaymentService.prototype.getPaymentToken = function () {
        debugger;
        var data = "username=" + this.client_id + "&password" + this.client_secret + "&grant_type=user_credentials";
        var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded', 'authorization': 'QWN5NHRBX3lSeVNZUVF0ZV9zUlQtU2NqdjZMemdSeXBhSXo2RkpmUzV1OFZzQWlMRmV0TF9OZjZUM285QWZXQjAyUXQwc2dERDYwOEEyLWQ6RUlTOWNKY3k0QnB1RjJ1Z19HZmZLVzB6WUd0TUVvTmhfT2treklMVTZWdjdsaUgyRGw0cWNvbG5GQXlyYmFGc3ktRkFweHpkaFRqRFJlVDE',
            'cache-control': 'no-cache', 'postman-token': '00085f71-b73e-ed4f-91c6-741cc707d9dd', });
        return this.http.post('https://api.sandbox.paypal.com/v1/oauth2/token', data, { headers: reqHeader });
    };
    PaymentService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], PaymentService);
    return PaymentService;
}());
export { PaymentService };
//# sourceMappingURL=payment.service.js.map