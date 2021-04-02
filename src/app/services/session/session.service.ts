import { Injectable } from "@angular/core";


export class SessionStorageService {
    public static SaveInSessionStorage(key: string, value: string): void {
        if (typeof sessionStorage === 'undefined' || !key)
            return;

        try {
            sessionStorage.setItem(key, value);
        } catch (e) {
            sessionStorage.removeItem(key);
            console.log(e);
        }
    }

    public static SaveObjectInSessionStorage(key: string, value: any) {
        if (typeof sessionStorage === 'undefined' || !key)
            return;

        this.SaveInSessionStorage(key, JSON.stringify(value))
    }

    public static getFromSessionStorage(key: string): string {
        if (typeof sessionStorage === 'undefined' || !key)
            return;
        return sessionStorage.getItem(key);
    }

    public static getObjectFromSessionStorage(key: string): any {
        if (typeof sessionStorage === 'undefined' || !key)
            return;
        const value = this.getFromSessionStorage(key);
        if (!value)
            return;
        let obj = null;
        try {
            obj = JSON.parse(value);
        } catch (e) {
            console.log(`err getObjectFromSession ${e}`);
        }
        console.log(obj);
        return obj;
    }

    public static removeFromSessionStrorage(key: string) {
        if (typeof sessionStorage === 'undefined' || !key)
            return;

        sessionStorage.removeItem(key);
    }
}