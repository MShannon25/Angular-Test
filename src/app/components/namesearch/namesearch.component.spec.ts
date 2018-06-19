import { TestBed, inject } from '@angular/core/testing';

import { NamesearchComponent } from './namesearch.component';

describe('a namesearch component', () => {
	let component: NamesearchComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NamesearchComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([NamesearchComponent], (NamesearchComponent) => {
		component = NamesearchComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});