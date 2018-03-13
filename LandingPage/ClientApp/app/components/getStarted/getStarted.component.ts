import { Component } from '@angular/core';
import './getStarted.component.scss';

const signUpImg = require("./../../../assets/img/signUp.png");
const selectTracker = require("./../../../assets/img/selectTracker.png");
const depositCurrency = require("./../../../assets/img/depositCurrency.png");
const enjoyEarnings = require("./../../../assets/img/enjoyEarnings.png");

@Component({
    selector: 'get-started',
    templateUrl: './getStarted.component.html'
})
export class GetStartedComponent {
    public selectedImg = signUpImg;
    public selectedStatus: Array<boolean> = [true, false, false, false];


    constructor() {
    }

    select(index: number) {
        console.log(this.selectedStatus[index]);
        this.selectedStatus.forEach((x, i) => {
            if (i != index) {
                this.selectedStatus[i] = false
            }
        });

        this.selectedStatus[index] = !this.selectedStatus[index];

        if (index == 0) {
            this.selectedImg = signUpImg;
        } else if (index == 1) {
            this.selectedImg = selectTracker;
        } else if (index == 2) {
            this.selectedImg = depositCurrency;
        } else if (index == 3) {
            this.selectedImg = enjoyEarnings;
        }
    }
}
