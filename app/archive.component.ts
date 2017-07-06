import {Component, OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router'
import {ArchivesService} from './archives.service'

@Component({
    template: `
        <div>
            <h3>Content:</h3>
            <textarea>
                {{archive.content}}
            </textarea>
        </div>
    `,
    providers: [ArchivesService]
    
})
export class ArchiveComponent implements OnInit{

    archive;

    constructor(
        private _routeParams: RouteParams, 
        private _archivesService: ArchivesService){
    }

    ngOnInit(){
        this.archive = this._archivesService.getArchive(
            this._routeParams.get("year"), 
            this._routeParams.get("month"))[0];
    }
    
}