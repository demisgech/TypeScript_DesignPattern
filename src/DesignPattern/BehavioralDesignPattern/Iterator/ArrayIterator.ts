// import { BrowseHistory } from "./BrowseHistory";
import { BrowseHistory } from "./BrowseHistory";
import { Iterator } from "./Iterator";

export class ArrayIterator<T> implements Iterator<T> {
  private _index: number = 0;
  constructor(private _history: BrowseHistory<T>) {}
  next(): void {
    this._index++;
  }
  current(): T {
    return this._history.urls[this._index];
  }
  hasNext(): boolean {
    return this._index < this._history.urls.length;
  }
}
