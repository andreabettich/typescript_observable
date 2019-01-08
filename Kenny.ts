import { IObserver } from "./IObserver";
import { IObservable } from "./IObservable";

export class Kenny implements IObserver<string>{
    constructor(private Observable: IObservable<string>){
        
    }
    ReceiveNotification(Message: string){
        console.log(`IN KENNY: ${Message}`);
    }
    UpdateData(){
        this.Observable.UpdateData("Some Super new Data from Kenny");
    }
}