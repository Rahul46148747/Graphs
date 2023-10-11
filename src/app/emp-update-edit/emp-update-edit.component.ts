import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {  FormControl, Validators, FormsModule } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emp-update-edit',
  templateUrl: './emp-update-edit.component.html',
  styleUrls: ['./emp-update-edit.component.css']
})
export class EmpUpdateEditComponent implements OnInit {
  empForm: FormGroup;

  constructor(private _fb: FormBuilder, private _empService:EmployeeService, private _router:Router ,private _dialogRef: MatDialogRef<EmpUpdateEditComponent>) {
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

  updateForm=new FormGroup({
    id: new FormControl([]),
    firstname: new FormControl([], Validators.minLength(3)),
    lastname: new FormControl([], Validators.minLength(3)),
    
  })


  onUpdateFormSubmit(updateForm:FormGroup)
   {
    
    this._empService.updateEmployee(updateForm.value).subscribe(
    
     (res)=>{
      if(res=="success"){
        this.displaymsg="Account Updated Successfully";
        this.IsAccountCreated=true;

      }else{
        this.displaymsg="Something went wrong";
        this.IsAccountCreated=false;
      }
    })

  }
}
