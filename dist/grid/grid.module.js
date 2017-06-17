import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid.component';
import { PaginationModule } from '../pagination/pagination.module';
var GridModule = (function () {
    function GridModule() {
    }
    return GridModule;
}());
export { GridModule };
GridModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ReactiveFormsModule, PaginationModule],
                declarations: [GridComponent],
                exports: [GridComponent]
            },] },
];
/** @nocollapse */
GridModule.ctorParameters = function () { return []; };
//# sourceMappingURL=grid.module.js.map