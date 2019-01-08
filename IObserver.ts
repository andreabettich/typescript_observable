export interface IObserver<T> {
  ReceiveNotification(Message: T): void;
  UpdateData(): void;
}
