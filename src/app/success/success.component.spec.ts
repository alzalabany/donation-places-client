import { SharedModule } from '../shared/shared.module';
import { SuccessComponent } from './success.component';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs/Observable';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessModule } from './success.module';
import { ActivatedRoute } from '@angular/router';
import { SavedPlace } from '../shared/services/saved-place.service';


describe('Success Component', () => {

    let comp: SuccessComponent;
    let fixture: ComponentFixture<SuccessComponent>;
    let de: DebugElement;
    let el: HTMLElement;
    let savedPlace
    let ActivatedRouteStub = {
        params: Observable.of('45456')
    }
    let savedPlaceStub = {
        userId:123
    }
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, SuccessModule, SharedModule],
            declarations: [],
            providers: [
                {provide: ActivatedRoute, useValue: ActivatedRouteStub},
                {provide: SavedPlace, useValue: savedPlaceStub} ,
            
            ],
        });
        fixture = TestBed.createComponent(SuccessComponent);
        comp = fixture.componentInstance;

        savedPlace = fixture.debugElement.injector.get(SavedPlace);
        // sb = fixture.debugElement.injector.get(SnackBarConfig);
    });


    it("should load", () => {
        expect(comp).toBeTruthy()
    })

    it("should save id if id is available in User Service", () => {
        comp.ngOnInit()
        expect(comp.id).toBeTruthy()
    })

    it("should navigate if id is not available", () => {
        savedPlace.placeId = null
        comp.ngOnInit()
        expect(comp.id).toBeFalsy()
    })
 


})
