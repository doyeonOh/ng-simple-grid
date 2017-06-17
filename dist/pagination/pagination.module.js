import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
var PaginationModule = (function () {
    function PaginationModule() {
    }
    return PaginationModule;
}());
export { PaginationModule };
PaginationModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ReactiveFormsModule],
                exports: [PaginationComponent],
                declarations: [PaginationComponent],
                providers: [],
            },] },
];
/** @nocollapse */
PaginationModule.ctorParameters = function () { return []; };
//# sourceMappingURL=pagination.module.js.map