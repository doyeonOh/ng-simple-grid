var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { GridComponent } from './grid/grid.component';
var AppComponent = (function () {
    function AppComponent() {
        this.gridColumns = [
            { type: 'text', key: 'id', name: '아이디', width: '33%' },
            { type: 'text', key: 'name', name: '이름', width: '33%' },
            { type: 'button', key: 'email', name: '이메일', width: '33%',
                onClick: function (e, value, data, index) {
                    alert(value);
                } },
        ];
        this.gridOption = {};
        this.gridEvent = {
            onClickRow: function (row, index) {
            }
        };
        this.sampleDataList = [
            { id: '1', name: 'Deby Jones', email: 'jacky@naver.com' },
            { id: '2', name: 'Micheal Jackson', email: 'micl@daum.com' },
            { id: '3', name: 'Emma Watson', email: 'emm@google.com' },
            { id: '4', name: 'Violet', email: 'viy@gmail.com' },
            { id: '5', name: 'Paul Pinix', email: 'pudil2dn@lyly.com' },
            { id: '6', name: 'Noah Leo', email: 'neodsp@nono.com' },
            { id: '7', name: 'Jackson', email: 'bddoq@aaaa.com' },
            { id: '8', name: 'Elsa', email: 'skl2lpa@dddd.com' },
            { id: '9', name: 'Frangken', email: 'dnkidef@bberr.com' },
            { id: '10', name: 'Hudson Sam', email: 'vvodp@gmail.com' },
            { id: '11', name: 'Sam Ko', email: 'xzoq@gmail.com' },
            { id: '12', name: 'Phillip Oh', email: 'dpfei@gmail.com' },
            { id: '13', name: 'Adriana Kwon', email: 'cslls@gmail.com' },
            { id: '14', name: 'Ezar Siqo', email: 'qwqwe@gmail.com' },
            { id: '15', name: 'Benjamin K', email: 'qqqq@gmail.com' },
            { id: '16', name: 'Kain Dick', email: 'wwwww@gmail.com' },
            { id: '17', name: 'Minis', email: 'ccccc@gmail.com' },
            { id: '18', name: 'Mark P', email: 'xxxxx@gmail.com' },
            { id: '19', name: 'Marcus Siri', email: 'asddw@gmail.com' },
            { id: '20', name: 'Morgan Jas', email: 'saas@gmail.com' },
            { id: '21', name: 'Mason Junior', email: 'lklk@gmail.com' },
            { id: '22', name: 'Moses Victor', email: 'ppoi@gmail.com' },
            { id: '23', name: 'Martin K', email: 'poiz@gmail.com' }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.grid.setDataList(this.sampleDataList);
    };
    return AppComponent;
}());
__decorate([
    ViewChild('grid'),
    __metadata("design:type", GridComponent)
], AppComponent.prototype, "grid", void 0);
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map