import { Observable } from 'rxjs';

const source = Observable.of(1,2,3,4,5);

const example = source
    .do(val => console.log(`Before map: ${val}`))
    .map( val => val + 10)
    .do(val => console.log(`After map: ${val}`));

const subscribe = example.subscribe( val => console.log(val));