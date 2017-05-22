// Una "clase" Persona
var Person = function( firstName, lastName ) {
	this.firstName = firstName;
	this.lastName = lastName;
};

Person.prototype.print = function() {
	console.log( this.firstName + ' ' + this.lastName );
};

// Una "clase" PeopleList
var PeopleList = function( people ) {
	this.people = people;
};

PeopleList.prototype.addPerson = function( person ) {
	this.people.push( person );
};

PeopleList.prototype.printAll = function() {
	this.people.forEach( function( person ) {
		// console.log(this); // No existirá!
		person.print();
	} );
};


var batman = new Person( "Bruce", "Wayne" );
var superman = new Person( "Clark", "Kent" );
var justiceLeague = new PeopleList( [] );

justiceLeague.addPerson( batman );
justiceLeague.addPerson( superman );
justiceLeague.printAll();