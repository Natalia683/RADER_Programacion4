import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }


url= "https://localhost:7151/api/"
  async getAll(Controller:string){
    var response: any
    await this.http.get<any>(this.url+Controller).toPromise().then((res=>{ 
      response=res

    }
        )
      )
      return response;
  }  
  async put(Controller:string,data:any){
    var response: any
    await this.http.put<any>(this.url,data).toPromise().then((res=>{
        response=res

    }
        )
      )
      return response;
  }  
  async delete(Controller:string,data:any){
    var response: any
    await this.http.delete<any>(this.url,data).toPromise().then((res=>{
        response=res

    }
        )
      )
      return response;
  }  
  async post(Controller:string,data:any){
    var response: any
    await this.http.post<any>(this.url,data).toPromise().then((res=>{
        response=res

    }
        )
      )
      return response;
  }  
  async get(Controller:string,data:any){
    var response: any
    await this.http.get<any>(this.url,data).toPromise().then((res=>{
        response=res

    }
        )
      )
      return response;
  }  

}
