import { sealed, logger, writable } from './decorators';

@logger
@sealed("sealed")
class TestClass {

    @writable(false)
    func () {

    }
    name: string;
}

let t = new TestClass();

try {
    t.func = ()=> console.log('error');
} catch(error) {
    console.log(error.message);
}