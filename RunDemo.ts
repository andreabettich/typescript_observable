import { IObservable } from "./IObservable";
import { Datastore } from "./Datastore";
import { IObserver } from "./IObserver";
import { Andrea } from "./Andrea";
import { Kenny } from "./Kenny";

let datastore: Datastore = new Datastore();

let ab: Andrea = new Andrea(datastore);
let kw: Kenny = new Kenny(datastore);

datastore.RegisterObserver(ab);
datastore.RegisterObserver(kw);

ab.UpdateData();