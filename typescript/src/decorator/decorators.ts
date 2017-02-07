export function sealed(name: string): Function {
    return function(target: Function): void {
        console.log('Sealing the constructor.');
        Object.seal(target);
        Object.seal(target.prototype);                                                                                 
    };
}

export function logger<TFunction extends Function>(target: TFunction): TFunction {
    let newConstructor: Function = function() {
        console.log('Creating new instance.');
        console.log(this);
        console.log(target);
    }

    newConstructor.prototype = Object.create(target.prototype);
    newConstructor.prototype.constructor = target;
    return <TFunction>newConstructor;
}

export function writable(isWritable: boolean) {
    return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(`Setting ${propertyKey} to be read-only.`);
        descriptor.writable = false;
    };
}