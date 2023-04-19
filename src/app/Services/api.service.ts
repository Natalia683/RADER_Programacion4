import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class ApiService {

  constructor(public http: HttpClient) { }


url= "https://localhost:7151/api/"

  async Get(controller:string){
    var response: any

    await this.http.get(this.url+controller).subscribe(res=>{ 
      response=res
     console.log(res);
    }
        )
      
      return response
  }  
  async Put(controller:string, id:string, body:any){
    var response: any
    await this.http.put(this.url+controller+"/"+ id,body).subscribe(res=>{
        response=res

    }
        
      )
      return response;
  }  
  async Delete(controller:string, id:string){
    var response: any
    await this.http.delete(this.url+controller+"/"+id).subscribe(res=>{
        response=res

    }
        )
      return response;
  }  
  async Post(controller:string, body:any){
    var response: any
    await this.http.post(this.url+controller, body).subscribe(res=>{
        response=res

    }
        )
      
      return response
  }  
  
}
