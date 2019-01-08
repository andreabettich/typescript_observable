import { IObservable } from "./IObservable";
import { IObserver } from "./IObserver";

export class Datastore implements IObservable<string> {
    private observers: IObserver<string>[];
    private data: string;
    constructor(){
        this.observers = [];
        this.data = "";
    }
    RemoveObserver(Observer: IObserver<string>){
        this.observers = this.observers.filter(observer => observer !== Observer);
    }
    RegisterObserver(Observer: IObserver<string>){
        this.observers.push(Observer);
    }
    NotifyObservers(){
        this.observers.forEach(observer => observer.ReceiveNotification(this.data));
    }
    UpdateData(Data: string){
        this.data = Data;
        this.NotifyObservers();
    }
}