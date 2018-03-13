import { Component, Inject } from '@angular/core';
import './home.component.scss';
import { HttpClient } from '@angular/common/http';
import { WINDOW } from "./../../utils/windowService";
const symbol = require("./../../../assets/img/symbol.png");

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    public symbol = symbol;
    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;
    public email: string = "";
    public hasError: boolean = false;
    private emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    constructor(private http: HttpClient, @Inject(WINDOW) private window: Window) {

    }

    sendEmail() {
        if (!this.emailPattern.test(this.email)) {
            this.hasError = true;

            return;
        }

        this.http.post('http://localhost:3003/api/account/email/save', { 'email': this.email }).subscribe(
            result => {
                this.window.location.href = 'http://localhost:3000/dev/serve/auth.html#/signup?email=' + this.email;
            },
            error => {
                this.window.location.href = 'http://localhost:3000/dev/serve/auth.html#/signup?email=' + this.email;
            }
        );
    }

    emailOnChange(email: string) {
        this.hasError = false;
    }

    scroll(elementId: string) {
        var el: HTMLElement | null = document.getElementById(elementId);
        if (el != null) {
            el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
        }
    }

    ngOnInit() {
        this.myStyle = {
            'position': 'absolute',
            'width': '100%',
            'height': '100%',
            'z-index': 4,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };

        this.myParams = {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#fc7e01'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: "#fc7e01"
                    },
                    polygon: {
                        nb_sides: 5
                    }
                },
                move: {
                    enable: true,
                    speed: 5,
                    direction: "none",
                    random: false,
                    straight: false,
                    out_mode: "out",
                    bounce: true,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "repulse"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            }
        }
    };
}
