export function sealed(target: Function): void {
    console.log('Sealing the constructor.');
    Object.seal(target);
    Object.seal(target.prototype);                                                                                 
}