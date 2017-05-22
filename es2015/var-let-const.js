const MAX_ITERATION_CYCLES = 100;

for( let i = 0; i < MAX_ITERATION_CYCLES; i ++ ) {
	console.log( i );
}

// Error, i no existirá debido a que el "hoisting" usando let restringe el alcance
// console.log( i );

// Error, una constante no puede ser modificada una vez que tiene un valor
// MAX_ITERATION_CYCLES = 22;

for( var j = 0; j < MAX_ITERATION_CYCLES; j ++ ) {
	console.log( j );
}

console.log( j );