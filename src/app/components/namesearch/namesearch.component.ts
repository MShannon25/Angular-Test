import { Component, OnInit } from '@angular/core';

import { PeopleService } from '../../services/people.service'

@Component({
	selector: 'name-search',
	templateUrl: './namesearch.component.html',
	styleUrls: ['./namesearch.component.css']
})

export class NamesearchComponent implements OnInit {

	constructor(private people: PeopleService) { }

	ngOnInit() {
		this.people.getAllPeople()
			.subscribe(data => {
				data["People"].forEach(person => {
					console.log(person.name);
				})
			})
	}
}