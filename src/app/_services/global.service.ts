import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
   
  ) { }

  /** converts date from backend style to front style.
   *  backend date style is MM_DD_YYYY and front style is YYYY/MM/DD,
   *  sometimes backend style is like this YYYY/M/D, this method will 
   *  convert it to YYYY/0M/0D.
   */
 

}