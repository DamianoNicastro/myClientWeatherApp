import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
var WeatherDataService = /** @class */ (function () {
    function WeatherDataService(http) {
        this.http = http;
        this.baseUrl = environment.BaseAddress;
    }
    WeatherDataService.prototype.getWeather = function () {
        return this.http.get(this.baseUrl + 'api/weather');
    };
    WeatherDataService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], WeatherDataService);
    return WeatherDataService;
}());
export { WeatherDataService };
//# sourceMappingURL=weather-data.service.js.map