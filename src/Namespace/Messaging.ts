
namespace Messaggging {
    
    export function greet(title:string,name:string) {
        console.log(`Hello ${title} ${name}`);
    }

    export class Chat {
        constructor() {

        }

        chatter():void {
            console.log("Chatting...");
            
        }
    }
}