import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private usersService : UsersService, private snackBar:MatSnackBar, public dialogRef : MatDialogRef<AddUserComponent>) { }
  form !: FormGroup;

  ngOnInit(): void {

    this.form = new FormGroup({
      firstName : new FormControl(null, [Validators.required]),
      lastName : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required , Validators.email] ),
      password : new FormControl(null, [Validators.required , Validators.minLength(6)]),
      phone : new FormControl(null, [Validators.required]),
      cin : new FormControl(null, [Validators.required , Validators.minLength(8), Validators.maxLength(8)]),
      date_in: new FormControl(null, [Validators.required]),
      date_out: new FormControl(null),
      job_title : new FormControl(null, [Validators.required]),
      department : new FormControl(null, [Validators.required])

    });
  }

  onSubmit(){
    this.usersService.addUser(this.form.value).subscribe((res: any ) =>{
      if (res.success == true){
        this.snackBar.open(res.message, 'close', {
          duration: 2000,
        });
        this.dialogRef.close();
      }
      else{
        this.snackBar.open(res.message, 'close', {
          duration: 2000,
        });
      }
    });
  }

}