System.register(['angular2/core', 'angular2/router', './archives.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, archives_service_1;
    var ArchiveComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (archives_service_1_1) {
                archives_service_1 = archives_service_1_1;
            }],
        execute: function() {
            ArchiveComponent = (function () {
                function ArchiveComponent(_routeParams, _archivesService) {
                    this._routeParams = _routeParams;
                    this._archivesService = _archivesService;
                }
                ArchiveComponent.prototype.ngOnInit = function () {
                    this.archive = this._archivesService.getArchive(this._routeParams.get("year"), this._routeParams.get("month"))[0];
                };
                ArchiveComponent = __decorate([
                    core_1.Component({
                        template: "\n        <div>\n            <h3>Content:</h3>\n            <textarea>\n                {{archive.content}}\n            </textarea>\n        </div>\n    ",
                        providers: [archives_service_1.ArchivesService]
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams, archives_service_1.ArchivesService])
                ], ArchiveComponent);
                return ArchiveComponent;
            }());
            exports_1("ArchiveComponent", ArchiveComponent);
        }
    }
});
//# sourceMappingURL=archive.component.js.map