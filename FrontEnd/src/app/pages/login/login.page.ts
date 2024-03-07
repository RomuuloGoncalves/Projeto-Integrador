import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  @ViewChild('loginForm') private loginForm!: NgForm;

  erros: any = {};
  loading: boolean = false;

  ngOnInit() {
  }

  public login() {
   

  
  }
}