import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {AlbumComponent} from './album.component'
import {AlbumsComponent} from './albums.component'
import {ContactComponent} from './contact.component'
import {ArchivesComponent} from './archives.component'
import {ArchiveComponent} from './archive.component'

@RouteConfig([
    { path: '/albums', name: 'Albums', component: AlbumsComponent },
    { path: '/albums/:id', name: 'Album', component: AlbumComponent},
    { path: '/contact', name: 'Contact', component: ContactComponent },
    { path: '/*other', name: 'Other', redirectTo: ['Albums']},
    { path: '/archives/:year/:month', name: 'Archive', component: ArchiveComponent},
    { path: '/archives', name: 'Archives', component: ArchivesComponent}
])

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

}