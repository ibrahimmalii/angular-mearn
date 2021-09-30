import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextContentService {

  constructor() { }

  isEmptyText(text : string): boolean{
    if(text == null || text.length == 0){
      return false;
    };

    return true;
  }
}
