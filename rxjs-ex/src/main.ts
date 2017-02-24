import { Observable, Observer } from 'rxjs';

const hello = Observable.create( (observer: Observer<any>) => {
    observer.next('Hello');
    observer.next('World');
});

const subscribe = hello.subscribe( (val:string) => console.log(val));

const evenNumbers = Observable.create( (observer: Observer<number>) => {
    let value = 0;
    const interval = setInterval(() => {
        if (value % 2 === 0)  {
            observer.next(value);
        }

        value++;
    }, 1000);

    return () => clearInterval(interval);
});

const subscribe1 = evenNumbers.subscribe( (val:number) => console.log(val));