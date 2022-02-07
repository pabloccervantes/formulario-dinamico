# Formulario Dinámico
<h4> :dart: <i>Reto técnico</i></h4>
<h3>Objetivo</h3>
Haciendo uso de React JS, crear un formulario que sea dinámico, donde se puedan agregar y eliminar campos desde la interfaz gráfica.<br>
La interfaz se debe dividir en dos partes. Una en la que se puedan elegir los campos a agregar y otra donde se muestren los campos y se permita eliminarlos.<br>
Se deben incluir, por lo menos, campos de tipo:
<ul>
<li>Text</li>
<li>Radio</li>
<li>Select</li>
</ul>
:hourglass_flowing_sand: Tiempo máximo para cumplir con el objetivo: <b>2 horas</b>

<h3>Desarrollo</h3>
<ol>
  <li>Se creó la aplicación de página única usando React.<br><br>

  ```
  $ npx create-react-app formulario-dinamico
  ```

  </li>

  <li>Se instalaron en el proyecto las librerias adicionales a usar:<br><br>

  ```
  //Sweetalert2, para facilitar la configuración de los campos a agregar al formulario
  $ npm install sweetalert2

  //Bootstrap, para agilizar el diseño
  $ npm install react-bootstrap bootstrap@5.1.3
  ```

  </li>

  <li>Se preparó el proyecto
    <ul>
      <li>Primero se organizaron las carpetas y archivos<br><br>
      <div align="center">
        <img src="https://github.com/PabloCerv/formulario-dinamico/blob/master/readme-images/1.png?raw=true" width="180">
      </div><br>
      </li>
      <li>Se preparó el main <i>App.js</i> para mostrar el componente <i>formulario</i><br><br>
      <div align="center">
        <img src="https://github.com/PabloCerv/formulario-dinamico/blob/master/readme-images/2.png?raw=true" width="270">
      </div><br>
      </li>
      <li>Los campos se cargan al formulario desde una archivo <i>json</i>, por lo que se generó el archivo con unos campos iniciales de ejemplo a mostrar<br><br>
      <div align="center">
        <img src="https://github.com/PabloCerv/formulario-dinamico/blob/master/readme-images/3.png?raw=true" width="300">
      </div><br>
      </li>
      <li>Finalmente, teniendo todo preparado, se comenzó con el desarrollo del componente <i>formulario</i>
        <ul>
          <li>Se vincula al estado del componente el archivo <i>json</i>, donde se leerán y guardaran los campos actuales del fomulario<br><br>
          <div align="center">
            <img src="https://github.com/PabloCerv/formulario-dinamico/blob/master/readme-images/4.png?raw=true" width="450">
          </div><br>
          </li>
          <li>Dependiendo de la entrada, se <i>pintan</i> los campos <i>(ejemplo con campo de texto)</i><br><br>
          <div align="center">
            <img src="https://github.com/PabloCerv/formulario-dinamico/blob/master/readme-images/5.png?raw=true" width="700">
          </div><br>
          </li>
          <li>Para añadir un campo, se hace uso de <a href="https://sweetalert2.github.io/" target="_blank"><i>Sweetalert2</i></a>, que permite crear una <i>ventana modal</i> personalizable de forma sencilla. Así pues, al
          añadir un campo, se abre un formulario para configurarlo, esto es, darle un título y nombrar opciones sí es un campo de tipo lista.<br><br>
          La estructura de un elemento <i>sweetalert2</i> básico está dada por:
          <ul>
            <li>Configuración de elementos a visualizar</li>
            <li>Funciones de estado</li>
          </ul>
          <br>
          Ejemplo - añadir campo de texto:<br><br>
          <div align="center">
            <img src="https://github.com/PabloCerv/formulario-dinamico/blob/master/readme-images/6.png?raw=true" width="600">
          </div><br>
          </li>
          <li>Para eliminar un campo, solo se busca por su id, se elimina del archivo y se actualiza el estado<br><br>
          <div align="center">
            <img src="https://github.com/PabloCerv/formulario-dinamico/blob/master/readme-images/7.png?raw=true" width="600">
          </div><br>
          </li>
        </ul>
      </li>
    </ul>
  </li>
</ol>

<h3>Resultado</h3>
:white_check_mark: La prueba, para su muestra, se alojó en GitHub Pages:
<a href="https://pablocerv.github.io/formulario-dinamico/" target="_blank">formulario-dinamico</a>

<br><br><br>
<p align="center"> :email: <i>pabloccervantes@gmail.com</i></p>
