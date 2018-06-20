import { Component, OnInit, Input } from '@angular/core';
import { People } from '../../people.model';

@Component({
	selector: 'likes',
	templateUrl: './likes.component.html',
	styleUrls: ['./likes.component.css']
})

export class LikesComponent implements OnInit {
	@Input() person: People;

	constructor() { }

	ngOnInit() { }
}