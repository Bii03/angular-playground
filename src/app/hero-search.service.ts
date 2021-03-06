import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {Hero} from './hero';
import {Injectable} from '@angular/core';


@Injectable()
export class HeroSearchService {

    constructor(private http: Http) {}

    search(term: String): Observable<Hero> {
        return this.http
            .get(`app/heroes/?name=${term}`)
            .map(response => response.json().data as Hero);
    }
}
