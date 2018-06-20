import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { People } from "../people.model";
import { Observable } from "rxjs";

@Injectable()
export class PeopleService {
    public people: People;
    public error: Error;
    private url: string = "assets/people.json";

    constructor(private http: HttpClient) { };

    public getAllPeople(): Observable<People> {
        return this.http.get<People>(this.url)
    }
}  