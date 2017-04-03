import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router } from '@angular/router';


@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})



export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService, private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    goToUserPolicies(name: string){
        
        this.router.navigate(['/policies']);
        //this.router.navigate(['/policies', name]);
    }
    
    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users.clients; });
    }
}