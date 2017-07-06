System.register(['angular2/core', 'angular2/router', './album.component', './albums.component', './contact.component', './archives.component', './archive.component'], function(exports_1, context_1) {
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
    var core_1, router_1, album_component_1, albums_component_1, contact_component_1, archives_component_1, archive_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (album_component_1_1) {
                album_component_1 = album_component_1_1;
            },
            function (albums_component_1_1) {
                albums_component_1 = albums_component_1_1;
            },
            function (contact_component_1_1) {
                contact_component_1 = contact_component_1_1;
            },
            function (archives_component_1_1) {
                archives_component_1 = archives_component_1_1;
            },
            function (archive_component_1_1) {
                archive_component_1 = archive_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        { path: '/albums', name: 'Albums', component: albums_component_1.AlbumsComponent },
                        { path: '/albums/:id', name: 'Album', component: album_component_1.AlbumComponent },
                        { path: '/contact', name: 'Contact', component: contact_component_1.ContactComponent },
                        { path: '/*other', name: 'Other', redirectTo: ['Albums'] },
                        { path: '/archives/:year/:month', name: 'Archive', component: archive_component_1.ArchiveComponent },
                        { path: '/archives', name: 'Archives', component: archives_component_1.ArchivesComponent }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: '/app/app.component.html',
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map