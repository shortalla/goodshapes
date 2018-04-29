import { Injectable, Inject } from '@angular/core';


/**
 * A service for tracking if a user has registered.
 */
@Injectable()
export class RegisterService {

    // Whether the user has registered
    private _isRegistered: boolean;

    get isRegistered(): boolean {
        return this._isRegistered;
    }

    constructor() {
        this._isRegistered = false;
    }

    /**
     * Set the registration to true
     */
    public register(): void {
        this._isRegistered = true;
    }
}
