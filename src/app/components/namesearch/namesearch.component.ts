import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../../services/people.service'
import { People } from '../../people.model';

@Component({
	selector: 'name-search',
	templateUrl: './namesearch.component.html',
	styleUrls: ['./namesearch.component.css']
})

export class NamesearchComponent implements OnInit {
	public persons = new Array();
	public selectedPerson: People;

	constructor(private people: PeopleService) { }

	ngOnInit() {
		this.people.getAllPeople()
			.subscribe(data => {
				data["People"].forEach(person => {
					this.persons.push(person);
				})
			})
	}
	selectPerson(person: People): void {
		console.log(person);
		this.selectedPerson = person;	
	}
}