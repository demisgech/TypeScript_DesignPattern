let level;
level = true;
level = 1;
level = 'Level';

function render(document:any) {
    console.log(document);
}

function log(message:any):any {
    return message;
}

const items:any[] = [null,undefined,'Apple',1,true];

const obj:any = {
    name:'Logger',
    value:23,
};

const obj2 = obj;
obj2.name = 1
obj.value = '23';