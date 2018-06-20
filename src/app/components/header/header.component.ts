import { Component, OnInit, Input } from '@angular/core';
import { People } from '../../people.model';

@Component({
	selector: 'header-app',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
	@Input() person: People;

	constructor() { }

	ngOnInit() { }
}