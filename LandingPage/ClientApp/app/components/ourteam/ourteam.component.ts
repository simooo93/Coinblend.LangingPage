import { Component } from '@angular/core';
import './ourteam.component.scss';
const milenPic = require("./../../../assets/img/Milen.jpg");
const mitkoPic = require("./../../../assets/img/Mitko.jpg");
const georgiPic = require("./../../../assets/img/georgi.jpg");
const simoPic = require("./../../../assets/img/Simo.jpg");


@Component({
    selector: 'our-team',
    templateUrl: './ourteam.component.html'
})
export class OurTeamComponent {
    public milenPic = milenPic;
    public mitkoPic = mitkoPic;
    public georgiPic = georgiPic;
    public simoPic = simoPic;
}
