import { Component } from '@angular/core';
import './home.component.scss';
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
