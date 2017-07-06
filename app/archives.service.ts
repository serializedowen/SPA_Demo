import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ArchivesService {
    private _archives = [
            {year: '2016', month: '1', content: '2016 1'},
            {year: '2016', month: '2', content: '2016 2'},
            {year: '2016', month: '3', content: '2016 3'}
    ]

    getArchives(){
        return this._archives;
    }

    getArchive(year: string, month: string){

        return this._archives.filter(function(archive){
                return (archive.month == month && archive.year == year);
            }
        )
    }


}