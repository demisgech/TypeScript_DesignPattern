import { BrowseHistory } from "./BrowseHistory";
import { Iterator } from "./Iterator";
const history = new BrowseHistory<number>();
history.push(1);
history.push(2);
history.push(3);

// for (let i = 0; i < history.urls.length; i++) {
//     const url = history.urls[i];
//     console.log(url);
// }

// history.urls.forEach(item => console.log(item));

const iterator:Iterator<number> =  history.createIterator();
while(iterator.hasNext()) {
    const url = iterator.current();
    console.log(url);
    iterator.next();
}