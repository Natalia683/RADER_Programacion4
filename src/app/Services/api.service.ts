import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(public http: HttpClient) { }


url= "https://localhost:7151/api/"
  async getAll(Controller:string){
    var response: any

    await this.http.get(this.url+Controller).subscribe(res=>{ 
      response=res
     console.log(res);
    }
        )
      
      return response;
  }  
  async put(Controller:string, id:string, body:any){
    var response: any
    await this.http.put(this.url+Controller+"/"+id,body).subscribe(res=>{
        response=res

    }
        
      )
      return response;
  }  
  async delete(Controller:string, id:string){
    var response: any
    await this.http.delete(this.url+Controller+"/").subscribe(res=>{
        response=res

    }
        )
      return response;
  }  
  async post(Controller:string,body:any){
    var response: any
    await this.http.post(this.url+Controller,body).subscribe(res=>{
        response=res

    }
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
