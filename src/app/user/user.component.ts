import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatButton } from '@angular/material/button';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { UserServicesService } from '../user-services.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';
import Swal from 'sweetalert2';



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


  displayedColumns: string[] = ['id', 'email', 'username', 'firstName', 'city', 'action'];

  dataSource!: MatTableDataSource<UserData>;

  users: any[] = [];
  individual : any;
  individual_id : any;





  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  singleUsers: any;



  constructor(private usersService: UserServicesService, private matdialog: MatDialog) {

  }




  ngOnInit() {

    this.usersService.getUserDetails().then((res) => {
      res.json().then((data) => {
      this.users = data;

      console.log("HII");
      console.log(data);

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

  OpenPopUp(individual_id:any)
  {
    this.usersService.getSingleUser(individual_id).then((res) => {
      res.json().then((singledata) => {
      this.singleUsers = singledata;

      console.log("HII");
      console.log(singledata);

      Swal.fire(
        {
          // title: '<strong>Hello, I m </strong>'+singledata.username,
          title:'<strong >Hello, I m </strong>'+'<b>'+singledata.name.firstname .charAt(0).toUpperCase() +singledata.name.firstname.slice(1)+ " "+ singledata.name.lastname.charAt(0).toUpperCase()+singledata.name.lastname.slice(1),
              text: "",
          icon: 'info',
          html:
          '<h4><b>Here are my details</b></h4>'+
            '<p id="user">User ID : ' + singledata.id +
            '</p><p id="user">User Name : ' + singledata.username +
            '<p id="user">User Email : ' + singledata.email +
            '</p><p>City : ' + singledata.address.city +
            '</p><p>Phone Number : ' + singledata.phone +
            '</p><p>Password : ' + singledata.password +
            '</p><p>Address : ' + singledata.address.zipcode + ", " + singledata.address.street + ", " + singledata.address.city,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Ok!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down"></i> Cancel',
      cancelButtonAriaLabel: 'Thumbs down'
      
        }
        
        );

      });

    }).catch((err) => {

      console.log(err)

    });
   
  }

}




