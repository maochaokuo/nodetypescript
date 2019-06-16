import { INamed } from './common';

export class Animal implements INamed {
    constructor(public name: string) {

    }
}

export class Animals extends Array<Animal> {
    constructor (public name:string){
        super();
        ['Lynx', 'Jaguar', 'Panther', 'Leopard', 'Tiger', 'Lion'
        ].forEach
        (animal =>
            this.push(new Animal(name))
        );
    }
}