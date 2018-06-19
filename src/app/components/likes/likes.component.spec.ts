import { TestBed, inject } from '@angular/core/testing';

import { LikesComponent } from './likes.component';

describe('a likes component', () => {
	let component: LikesComponent;

	// register all needed dependencies
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				LikesComponent
			]
		});
	});

	// instantiation through framework injection
	beforeEach(inject([LikesComponent], (LikesComponent) => {
		component = LikesComponent;
	}));

	it('should have an instance', () => {
		expect(component).toBeDefined();
	});
});