import { State } from "./State";
import { StoppedState } from "./StoppedState";

export class Stopwatch {
    private _currentState: State = new StoppedState(this);

    public get currentState(): State {
        return this._currentState;
    }
    public set currentState(value: State) {
        this._currentState = value;
    }

    public click():void {
      this._currentState.click();
    //   this._currentState.click();
    //   this._currentState.click();
    }
}

// Correct implementation
/*
export class Stopwatch {
    private isRunning:boolean = false;

    public click():void {
        if(this.isRunning) {
            this.isRunning = false;
            console.log('Stopped...');
        }
        else {
            this.isRunning = true;
            console.log('Running...');
            
        }
    }
}*/