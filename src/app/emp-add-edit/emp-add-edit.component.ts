import { Component,Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  FormControl, Validators} from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.css']
})
export class EmpAddEditComponent  {
  empForm: FormGroup;

  constructor(private _fb: FormBuilder, private _empService:EmployeeService, private _router:Router ,private _dialogRef: MatDialogRef<EmpAddEditComponent>) {
    this.empForm= this._fb.group({
      id:'',
      firstname:'',
      lastname:'',
      action:''
    });
   }


   ngOnInit(): void {
  }

  displaymsg:string="";
  IsAccountCreated:boolean=false;

  registerForm = new FormGroup({
    id: new FormControl([]),
    firstname: new FormControl([], Validators.minLength(3)),
    lastname: new FormControl([], Validators.minLength(3)),
    
  })


 
  onFormSubmit(registerForm:FormGroup){

    console.log(registerForm.value)
    this._empService.InsertTableRow(
      
      
     registerForm.value

    ).subscribe((res)=> {
      console.log(res);
      if(res=="success"){
                this.displaymsg="Account Created Successfully";
                this.IsAccountCreated=true;
        
              }else if(res=='Already Exist'){
                this.displaymsg="Account Already Exist try again";
                this.IsAccountCreated=false;
              }else{
                this.displaymsg="Something went wrong";
                this.IsAccountCreated=false;
    }
  })
  


  //  onFormSubmit(){
  //   if(this.empForm.valid){
  //     this._empService.addEmployee(this.empForm.value).subscribe({
  //       next:(val:any)=>{
  //         alert('success');
  //         this._dialogRef.close(true);
  //       },
  //       error:(err:any)=>{
  //         console.error(err);
  //       },
  //     })
  //   }
  //  }

}
}
