import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {}

  // addEmployee(data: any): Observable<any>{
  //   return this.http.post('http://localhost:3000/employees', data);
  // }

   getEmployeeList(): Observable<any>{
    return this.http.get('https://localhost:44387/api/Employee/GetData');
  }

  deleteEmployee(eid:number): Observable<any> {
    //return this.http.delete(`https://localhost:44387/api/Employee/DeleteData/${eid}`);
    console.log(eid);

    return this.http.delete('https://localhost:44387/api/Employee/DeleteData/'+eid);
  }   



  updateEmployee(eid:any): Observable<any> {
    
    console.log(eid);

    return this.http.put('https://localhost:44387/api/Employee/Updatedata/'+eid.id,eid,{responseType:"text"});
  }


  //https://localhost:44387/api/Employee/Updatedata
  InsertTableRow(formData: FormGroup){
    return this.http.post('https://localhost:44387/api/Employee/InsertEmp', formData,
    
    {
      responseType: "text"
    });
  }

}
