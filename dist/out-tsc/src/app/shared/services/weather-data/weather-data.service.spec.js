import { TestBed } from '@angular/core/testing';
import { WeatherDataService } from './weather-data.service';
describe('WeatherDataService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(WeatherDataService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=weather-data.service.spec.js.map