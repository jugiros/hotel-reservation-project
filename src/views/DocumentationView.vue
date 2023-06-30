<template lang="pug">
.container-views
  h1 hotel-reservation-project
  h2 Doumentaci&oacute;n de la implementaci&oacute;n del proyecto.
  h3 Versiones de NODE y NPM utilizadas
  h4 NODE
  p v17.9.1
  h4 NPM
  p 8.5.4
  h2 Project setup
  p yarn install
  h2 Compiles and hot-reloads for development
  p yarn serve
  h2 Compiles and minifies for production
  p yarn build
  h2 Run your unit tests
  p yarn test:unit
  h2 Lints and fixes files
  p yarn lint
  h1 An&aacute;lisis previo para la implementaci&oacute;n de desarrollo
  p Dentro del directorio documents que se encuentra en la ra&iacute;z del proyecto, se encuentra el archivo previous-data.xlsx. Dentro de este archivo se descrici&oacute; de manera general los elementos principales a considerar previo al desarrollo.
  p Se intent&oacute; que la implementaci&oacute;n del proyecto sea lo m&aacute;s minimalista y sencilla posible. Dentro de todas las ventanas se tiene principalmente los botones para agregar las fechas y limpiar los datos que se haya generado dentro de una b&uacute;squeda.
  p Al agregar las fechas el usuario tendr&aacute; por defecto seleccionado el tipo de cliente normal as&iacute; como la fecha actual para poder agregarla dentro de la lista de fechas que desea reservas. Una vez que el usuario haya agregado las fechas en las cuales desea realizar su reserva podr&aacute; realizar la b&uacute;squeda del mejor hotel en cuanto a costo que se tenga dentro de los d&iacute;as de reserva seleccionados.
  h2 Pinia
  p El proyecto se encuentra desarrollado con Pinia, para gestor de los estados del aplicativo como mejora para la utilizaci&oacute;n de typescript.
  h2 PUG
  p Dentro de la implementaci&oacute;n del aplicativo se agreg&oacute; la dependencia PUG. Esta dependencia ayuda a reducir las l&iacute;neas de c&oacute;digo dentro de la implementaci&oacute;n de html. Tambi&eacute;n ayuda a validar la correcta implementaci&oacute;n de las etiquetas ya que se obtiene un error en el caso de que se aplique de manera incorrecta la identaci&oacute;n.
</template>
<script/>

<style lang="scss" scoped>
.container-views {
  p {
    text-align: justify;
  }
}
</style>