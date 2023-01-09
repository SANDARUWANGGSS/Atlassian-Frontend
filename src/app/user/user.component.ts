import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { UserServicesService } from '../user-services.service';



export interface UserData {

  id: string;

  email: string;

  username: string;

  firstName: string;

  city: string;

}




@Component({

  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']

})

export class UserComponent implements  OnInit {


  displayedColumns: string[] = ['id', 'email', 'username', 'firstName', 'city'];

  dataSource!: MatTableDataSource<UserData>;

  users: any[] = [];

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  @ViewChild(MatSort, { static: false }) sort!: MatSort;



  constructor(private usersService: UserServicesService) {



  }




  ngOnInit() {

    // this.usersService.getUserDetails().subscribe((data: any) => {

    //   console.log(data);

    //   this.users = data;

    //   this.dataSource = new MatTableDataSource(this.users);



    //   this.dataSource.paginator = this.paginator;

    // this.dataSource.sort = this.sort;

    // }



    // );
    this.usersService.getUserDetails().then((res) => {
      res.json().then((data) => {
      this.users = data;

      console.log("HII");
      console.log(data);

       // return data;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      });

    }).catch((err) => {

      console.log(err)

    });

  }






  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();



    if (this.dataSource.paginator) {

      this.dataSource.paginator.firstPage();

    }

  }

}




