# hotel-reservation-project 

## Doumentación de la implementación del proyecto.

### Versiones de NODE y NPM utilizadas
#### NODE
v17.9.1

#### NPM
8.5.4

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Análisis previo para la implementación de desarrollo

Dentro del directorio documents que se encuentra en la raíz del proyecto, 
se encuentra el archivo previous-data.xlsx. Dentro de este archivo se descrició
de manera general los elementos  principales a considerar previo al desarrollo.

Se intentó que la implementación del proyecto sea lo más minimalista y sencilla 
posible. Dentro de todas las ventanas se tiene principalmente los botones para 
agregar las fechas y limpiar los datos que se haya generado dentro de una búsqueda.

Al agregar las fechas el usuario tendrá por defecto seleccionado el tipo de cliente 
normal así como la fecha actual para poder agregarla dentro de la lista de fechas 
que desea reservas. Una vez que el usuario haya agregado las fechas en las cuales 
desea realizar su reserva podrá realizar la búsqueda del mejor hotel en cuanto a 
costo que se tenga dentro de los días de reserva seleccionados.

### Pinia
El proyecto se encuentra desarrollado con Pinia, para gestor de los estados del 
aplicativo como mejora para la utilización de typescript.

### PUG
Dentro de la implementación del aplicativo se agregó la dependencia PUG. Esta 
dependencia ayuda a reducir las líneas de código dentro de la implementación 
de html. También ayuda a validar la correcta implementación de las etiquetas 
ya que se obtiene un error en el caso de que se aplique de manera incorrecta 
la identación.
