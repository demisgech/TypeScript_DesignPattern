class KeyValuePair<K,V> {
    constructor(public key:K,public vlaue:V) {

    }

    log():void {
        console.log(this.key,this.vlaue);
    }

}

const keyValuePair = new KeyValuePair<string,string>('Name','Demis');

keyValuePair.log();

