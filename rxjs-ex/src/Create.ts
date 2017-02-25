import { Observable, Observer, Subscription } from 'rxjs';

//Ex1. Observable that emits multiple values
const basicObs: Observable<string> = Observable.create( (observer: Observer<any>) => {
    observer.next('Hello');
    observer.next('World');
});

basicObs.subscribe(
    val => console.log(val),
    err => {},
    () => console.log('this is the end')
);

//Ex2. Observable that emits an error
const errObs: Observable<number> = Observable.create( (observer: Observer<any>) => {
    observer.error('something went really wrong...');
});

errObs.subscribe(
    val => console.log(val), // will never be called
    err => console.log(err),
    () => console.log('complete') // will never be called
);

//Ex3. Observable that emits even numbers on timer
const asyncObs = Observable.create( (observer: Observer<number>) => {
    let value = 0;
    const interval = setInterval(() => {
        if (value % 2 === 0)  {
            observer.next(value);
        }
        value++;
    }, 1000);

    return () => clearInterval(interval);
});

const subscription: Subscription = asyncObs.subscribe( (val:number) => console.log(val));

setTimeout(() => {
    subscription.unsubscribe();
}, 10000);