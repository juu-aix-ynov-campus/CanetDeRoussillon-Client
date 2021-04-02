import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { SessionStorageService } from "../session/session.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    private term = 'connectedUser';
    private subject = new Subject<any>();
    constructor(
        private sessionStorageService: SessionStorageService
    ) { }

    isConnected(message: string) {
        this.subject.next(message);
    }

    clearData() {
        this.subject.next();
    }

    getData(): Observable<any> {
        return this.subject.asObservable();
    }

    canActivate() {
        return true;
    }
}