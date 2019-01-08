import { IObserver } from "./IObserver";

export interface IObservable<T> {
  RegisterObserver(Observer: IObserver<T>): void;
  RemoveObserver(Observer: IObserver<T>): void;
  NotifyObservers(): void;
  UpdateData(Data: T): void;
}
