import { Observable } from 'rxjs';

console.log('start');
// emit every 1s, take 2
const source = Observable.interval(1000).take(3);

//map first value to 500ms interval and second to 1s, take two values
const example = source.map(val => {
    return Observable.interval(500).take(2);
});

/*
    2 values from source will map to 2 (inner) interval observables that emit every. .5s
    and 1s. combineAll uses combineLatest strategy, emitting the last value from each
    whenever either observable emits a value
*/

const combined = example.combineAll();

const subscribe = combined.subscribe(val => console.log(val));