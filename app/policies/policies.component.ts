import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PolicyService } from '../_services/index';
import { User } from '../_models/user';
import { Policy } from '../_models/policy';

@Component({
    moduleId: module.id,
    templateUrl: 'policies.component.html'
})

export class PoliciesComponent implements OnInit {
    currentUser: User;
    policies: Policy[] = [];
    
    name: string;
    private sub: any;

    constructor(private policyService: PolicyService, private route: ActivatedRoute) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser);
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.name = params['name']; 
        });
        this.loadUserPoicies(this.name);     
    }

    private loadUserPoicies(name: string) {
        this.policyService.getByName(name).subscribe(policies => this.policies = policies.policies );
    }

    private loadAllPolicies() {
        this.policyService.getAll().subscribe(policies => this.policies = policies.policies)
    }
}
