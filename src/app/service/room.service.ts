import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  apiEndPoint : string = "https://localhost:7183/"
  constructor(private http:HttpClient) { }

  login(obj:any) {
    return this.http.post(this.apiEndPoint + 'Account/Login', obj)
  }

  getAllRooms() {
    return this.http.get(this.apiEndPoint + '')
    
  }
}
