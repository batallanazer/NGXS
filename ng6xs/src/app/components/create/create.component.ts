import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddUser } from '../../actions/user.action';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm(){
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required]
    });
  }
  addUser(name: string, email: string){
    this.store.dispatch(new AddUser({name, email}));
  }
}
