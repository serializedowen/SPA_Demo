import {Component, OnInit} from 'angular2/core'
import {RouterLink} from 'angular2/router'
import {ArchivesService} from './archives.service'

@Component({
    template: `
        <h3>Archives</h3>
        <ul>
            <li *ngFor="#archive of archives">
                <a [routerLink]="['Archive', {year: archive.year, month: archive.month}]"> {{archive.year}}/{{archive.month}}</a>
            </li>
        </ul>
    `,
    directives: [RouterLink],
    providers: [ArchivesService]
})
export class ArchivesComponent implements OnInit{
    archives;
    isLoading = true;

    constructor(private _archivesService: ArchivesService){

    }

    ngOnInit(){
        this.archives = this._archivesService.getArchives();
    }
}