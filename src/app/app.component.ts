import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpAddEditComponent } from './emp-add-edit/emp-add-edit.component';
import { EmployeeService } from './services/employee.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import { EmpUpdateEditComponent } from './emp-update-edit/emp-update-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  displayedColumns: string[] = ['id', 'firstname', 'lastname','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog:MatDialog, private _empService: EmployeeService){}
 
  ngOnInit(): void{
   this.getEmployeeList();
  }

  OpenAddEditEmpForm(){
  const dialogref = this._dialog.open(EmpAddEditComponent);
    dialogref.afterClosed().subscribe({
      next: (val)=>{
        if(val){
          this.getEmployeeList();
        }
      }
    })
  }



  OpenUpdateEditEmpForm(){
    const dialogref = this._dialog.open(EmpUpdateEditComponent);
      dialogref.afterClosed().subscribe({
        next: (val)=>{
          if(val){
            this.getEmployeeList();
          }
        }
      })
    }


  getEmployeeList(){
    this._empService.getEmployeeList().subscribe({
      next:(res:any)=>{
        this.dataSource= new MatTableDataSource(res);
        this.dataSource.sort= this.sort;
        this.dataSource.paginator= this.paginator;
      },
      error:console.log,
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmployee(eid:number){
    console.log(eid);
    this._empService.deleteEmployee(eid).subscribe({
      next:(res:any)=>{
        alert('Deleted');
        this.getEmployeeList();
      },
      error:console.log,
    });
  }


  updateEmployee(eid:number){
    console.log(eid);
    this._empService.updateEmployee(eid).subscribe({
      next:(res:any)=>{
        alert('Deleted');
        this.getEmployeeList();
      },
      error:console.log,
    });
  }


  OpenEditForm(data:any){
    this._dialog.open(EmpAddEditComponent,{
      data,
    });
    
}
}