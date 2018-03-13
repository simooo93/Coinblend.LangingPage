import { Component } from '@angular/core';
import './about.component.scss';
const participateImg = require("./../../../assets/img/participate.png"); 
const difficultImg = require("./../../../assets/img/difficult.png"); 
const profitImg = require("./../../../assets/img/profit.png"); 
const logo = require("./../../../assets/img/logo.png");
const simplicity = require("./../../../assets/img/simplicity.png");

const lowEntry = require("./../../../assets/img/lowEntry.png");
const securityChecked = require("./../../../assets/img/security-checked.png");



@Component({
    selector: 'about',
    templateUrl: './about.component.html'
})
export class AboutComponent {
    public participateImg = participateImg;
    public difficultImg = difficultImg;
    public profitImg = profitImg;
    public logo = logo;
    public simplicity = simplicity;
    public lowEntry = lowEntry;
    public securityChecked = securityChecked;
}
