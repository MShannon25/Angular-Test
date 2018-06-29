import { Component, OnInit,  Input } from '@angular/core';
import { People } from '../../people.model';
import {
	trigger,
	state,
	style,
	animate,
	transition
  } from '@angular/animations';

@Component({
	selector: 'header-app',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
	animations: [
	    trigger('myAwesomeAnimation', [
			transition(":enter", [
				style({ opacity: 0 }),
				animate(500, style({ opacity: 1 }))
				])
		])
    ]
})

export class HeaderComponent implements OnInit {
	@Input() person: People;
	state: string;

	constructor() { }

	ngOnInit() {
		//this.state = 'in';
	}
}