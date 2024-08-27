interface Product {
    name: string;
}

class Searchableproduct implements Product {
    constructor (private _name: string,private _title: string ) {

    }
    set name(_name:string) {
        this._name = _name;
    }
    set title(_title:string) {
        this._title = _title;
    }

    get name():string {
        return this._name;
    }

    get title():string {
        return this._title;
    }
}

const searchableProduct = new Searchableproduct('Apple','A product for vitamin use');



interface Store<T> {
 name:T|string,
 title:string,
    location:T
}

class SearchableStore<T> implements Store<T> {
  constructor( private _name: string | T,private _title: string,private _location: T) {

  }

  displayInfo():void {
    console.log(`${this._name} ${this._title} ${this._location}`);
  }
  set name(_name:T|string) {
    this._name = _name;
  }
  set location(_location:T) {
    this._location = _location;
  }

  set title(_title:string) {
    this._title = _title;
  }


}