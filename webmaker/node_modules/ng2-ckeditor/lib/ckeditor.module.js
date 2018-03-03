"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var ckeditor_component_1 = require("./ckeditor.component");
var ckbutton_directive_1 = require("./ckbutton.directive");
var ckgroup_directive_1 = require("./ckgroup.directive");
/**
 * CKEditorModule
 */
var CKEditorModule = (function () {
    function CKEditorModule() {
    }
    return CKEditorModule;
}());
CKEditorModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    ckeditor_component_1.CKEditorComponent,
                    ckbutton_directive_1.CKButtonDirective,
                    ckgroup_directive_1.CKGroupDirective
                ],
                exports: [
                    ckeditor_component_1.CKEditorComponent,
                    ckbutton_directive_1.CKButtonDirective,
                    ckgroup_directive_1.CKGroupDirective
                ]
            },] },
];
/** @nocollapse */
CKEditorModule.ctorParameters = function () { return []; };
exports.CKEditorModule = CKEditorModule;
//# sourceMappingURL=ckeditor.module.js.map