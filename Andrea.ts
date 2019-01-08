import { IObserver } from "./IObserver";
import { IObservable } from "./IObservable";

export class Andrea implements IObserver<string>{
    constructor(private Observable: IObservable<string>){
        
    }
    ReceiveNotification(Message: string){
        console.log(`IN ANDREA: ${Message}`);
    }
    UpdateData(){
        this.Observable.UpdateData("Some Super new Data from Andrea");
    }
}