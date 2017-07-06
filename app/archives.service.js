System.register(['angular2/core', 'rxjs/add/operator/map'], function(exports_1, context_1) {
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
    var core_1;
    var ArchivesService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            ArchivesService = (function () {
                function ArchivesService() {
                    this._archives = [
                        { year: '2016', month: '1', content: '2016 1' },
                        { year: '2016', month: '2', content: '2016 2' },
                        { year: '2016', month: '3', content: '2016 3' }
                    ];
                }
                ArchivesService.prototype.getArchives = function () {
                    return this._archives;
                };
                ArchivesService.prototype.getArchive = function (year, month) {
                    return this._archives.filter(function (archive) {
                        return (archive.month == month && archive.year == year);
                    });
                };
                ArchivesService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ArchivesService);
                return ArchivesService;
            }());
            exports_1("ArchivesService", ArchivesService);
        }
    }
});
//# sourceMappingURL=archives.service.js.map