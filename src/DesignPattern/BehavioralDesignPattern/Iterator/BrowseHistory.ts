// import { ArrayIterator } from "./ArrayIterator";
// import { Iterator } from "./Iterator";

export class BrowseHistory {
  private _urls: string[] = [];
    public get urls(): string[] {
        return this._urls;
    }
    public set urls(value: string[]) {
        this._urls = value;
    }

  public push(url: string): void {
    this.urls.push(url);
  }

  public pop(): string | undefined {
    let lastUrl = this.urls.pop();
    return lastUrl;
  }


  //    private _ArrayIterator = class implements Iterator {
  //          private _index:number = 0;
  //      constructor(private _history: BrowseHistory) {
  //      }
  //      next(): void {
  //          this._index++;
  //      }
  //      current(): string {
  //          return this._history._urls[this._index];
  //      }
  //      hasNext(): boolean {
  //          return (this._index < this._history._urls.length);
  //      }
  // }

  // public createIterator:Iterator {
  //   const inner = new this._ArrayIterator(this);

  //   return inner;
  // }
}
