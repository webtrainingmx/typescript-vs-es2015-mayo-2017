let person = {
	firstName: "Bruce",
	lastName: "Wayne"
};

// let personTemplate = '<div class="person">' + person.firstName + '</div>';
let personTemplate = `
  <div class="person">
    ${person.firstName} ${person.lastName}
  </div>
`;

(function render() {
	console.log( personTemplate );
})();