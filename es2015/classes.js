// Una "clase" Persona
class Person {
	constructor( firstName, lastName ) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	print() {
		console.log( `${this.firstName} ${this.lastName}` );
	}
}

// Una "clase" PeopleList
class PeopleList {
	constructor( people ) {
		this.people = people;
	}

	addPerson( person ) {
		this.people.push( person );
	}

	printAll() {
		this.people.forEach( ( person ) => {
			// console.log(this); // Será la clase PeopleList misma!
			person.print();
		} );
	}
}

let batman = new Person( "Bruce", "Wayne" );
let superman = new Person( "Clark", "Kent" );
let justiceLeague = new PeopleList( [] );

justiceLeague.addPerson( batman );
justiceLeague.addPerson( superman );
justiceLeague.printAll();