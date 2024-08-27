import { BrowseHistory } from "./BrowseHistory";
// import { Iterator } from "./Iterator";
const history = new BrowseHistory();
history.push('a');
history.push('b');
history.push('c');

// for (let i = 0; i < history.urls.length; i++) {
//     const url = history.urls[i];
//     console.log(url);
// }

history.urls.forEach(item => console.log(item));

// const iterator:Iterator =  history.createIterator;
// while(iterator.hasNext()) {
    
// }