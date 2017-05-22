# TypeScript vs ES2015

¿Has escuchado hablar de TypeScript el nuevo super lenguaje para crear
aplicaciones profesionales de Front-end?

¿Cómo te ha ido con las versiones más recientes de JavaScript? ¿tuviste oportunidad
de probar cosas como *arrow functions*, *classes*, *modules*?

Si estás buscando un lugar dónde conocer más sobre estos temas este repositorio es para ti.

# Comandos interesantes del compilador de TypeScript

Instalar el compilador de typescript
```
npm install typescript -g
tsc -v
```

Compilar un archivo fuente
```
tsc src/app.ts
```

Compilar un archivo fuente y dejar el resultado en alguna ruta
```
tsc --out dist/bundle.js src/app.ts
```

Vigilar por cambios
```
tsc --watch --out dist/bundle.js src/app.ts
```

Compilar System.js modules
```
https://www.typescriptlang.org/docs/handbook/compiler-options.html
tsc --watch --module system --out dist/bundle.js src/app.ts
```

Inicializar un proyecto de TypeScript. Más información aquí: 
[https://www.typescriptlang.org/docs/handbook/tsconfig-json.html](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
```
tsc --init
```


Búsqueda de @types
[http://microsoft.github.io/TypeSearch/](http://microsoft.github.io/TypeSearch/)
[https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/](https://blogs.msdn.microsoft.com/typescript/2016/06/15/the-future-of-declaration-files/)

Instalar un nuevo @type. Por ejemplo para obtener tipos de [lodash](https://lodash.com/)
```
npm install --save @types/lodash
```

