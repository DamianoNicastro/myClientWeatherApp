import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { WeatherDataService } from 'src/app/shared/services/weather-data/weather-data.service';
import { ActivatedRoute } from '@angular/router';
var WeaterDisplayComponent = /** @class */ (function () {
    function WeaterDisplayComponent(weatherService, route) {
        this.weatherService = weatherService;
        this.route = route;
        this.curDate = new Date();
    }
    WeaterDisplayComponent.prototype.ngOnInit = function () {
        this.temperature = true;
        var checkboxList4 = JSON.parse(this.route.snapshot.paramMap.get('object'));
        this.checkBoxList = checkboxList4;
        console.log(this.checkBoxList);
        this.loadData();
    };
    WeaterDisplayComponent.prototype.loadData = function () {
        var _this = this;
        this.weatherService.getWeather().subscribe(function (x) { return _this.weather = x; });
    };
    WeaterDisplayComponent.prototype.conversion = function (temp_max, temp_min) {
        debugger;
        if (this.temperature) {
            this.weather.mainTemp_max = this.convertToCelsius(temp_max);
            this.weather.mainTemp_min = this.convertToCelsius(temp_min);
            this.temperature = false;
        }
        else if (!this.temperature) {
            this.weather.mainTemp_max = this.convertToFahreinheit(temp_max);
            this.weather.mainTemp_min = this.convertToFahreinheit(temp_min);
            this.temperature = true;
        }
    };
    WeaterDisplayComponent.prototype.convertToFahreinheit = function (tempCelsius) {
        return (tempCelsius * 9 / 5) + 32;
    };
    WeaterDisplayComponent.prototype.convertToCelsius = function (tempFahreinheit) {
        return (tempFahreinheit - 32) * 5 / 9;
    };
    WeaterDisplayComponent = tslib_1.__decorate([
        Component({
            selector: 'app-weater-display',
            templateUrl: './weater-display.component.html',
            styleUrls: ['./weater-display.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [WeatherDataService, ActivatedRoute])
    ], WeaterDisplayComponent);
    return WeaterDisplayComponent;
}());
export { WeaterDisplayComponent };
//# sourceMappingURL=weater-display.component.js.map