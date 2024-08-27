let user:[number,string] = [1,'Demis'];
user.push('Hello');
user.forEach(u => console.log(u));

let instructors:[{name:string,id:number}] = [{name:'John',id:1}];
instructors.push({name:'Demis',id:2});

instructors.forEach(instructor => console.log(instructor))
