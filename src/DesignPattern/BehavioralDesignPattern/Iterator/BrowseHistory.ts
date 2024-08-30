import { Iterator } from "./Iterator";

export class BrowseHistory<T> {
  private _urls: T[] = [];
  // public get urls(): string[] {
  //   return this._urls;
  // }
  public set urls(value: T[]) {
    this._urls = value;
  }

  public push(url: T): void {
    this._urls.push(url);
  }

  public pop(): T | undefined {
    let lastUrl = this.urls.pop();
    return lastUrl;
  }

  public createIterator(): Iterator<T> {
    return new this.ArrayIterator(this);
  }

  private ArrayIterator = class implements Iterator<T> {
    private _index: number = 0;
    constructor(private _history: BrowseHistory<T>) {}
    next(): void {
      this._index++;
    }
    current(): T {
      return this._history._urls[this._index];
    }
    hasNext(): boolean {
      return this._index < this._history._urls.length;
    }
  };
}
