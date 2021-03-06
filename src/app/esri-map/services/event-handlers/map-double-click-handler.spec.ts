import { async, getTestBed, TestBed } from '@angular/core/testing';
import { MapDoubleClickHandler } from './map-double-click-handler';
import { MapCoreEventsHandler } from './map-core-events-handler';
import { RouterTestingModule } from '@angular/router/testing';
import { SavedPlaceService } from '../../../shared/services/saved-place.service';
import { GraphicsService } from '../../../shared/services/graphics.service';

describe('Map Double Click Handler', () => {
    let _service: MapDoubleClickHandler
    const savedPlaceServiceStub = {
        saveLocation(longitude, latitude, address) {

        }
    }
    const graphicsServiceStub = {
        showAddingPopup(x, y, z) {

        }
    }
    const view = {
        center: {
            longitude: 10,
            latitude: 20
        },
        then(fn) {

        },
        on(fn1, fn2) {
            return {}
        }
    }


    const locator = (x) => { }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule
            ],
            providers: [
                MapCoreEventsHandler,
                { provide: SavedPlaceService, useValue: savedPlaceServiceStub },
                { provide: GraphicsService, useValue: graphicsServiceStub },
                MapDoubleClickHandler
            ]
        });
        const testbed = getTestBed();
        _service = testbed.get(MapDoubleClickHandler)
    });



    it('should assign double click handler', () => {
        _service.implement(view, locator)
        expect(_service).toBeTruthy()

    });

    it('should call view function', () => {
        const spy = spyOn(view, 'on')
        _service.implement(view, locator)
        expect(spy).toHaveBeenCalled()
    });




})
