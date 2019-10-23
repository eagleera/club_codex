<template>
  <div class="eg-slideshow">
    <slide>
      <section>
        <div class="row vh-100 align-items-center">
          <div class="col-3 offset-1">
            <img
              class="img img-responsive"
              src="http://obscureproblemsandgotchas.com/wp-content/uploads/2018/06/bootstrap-stack-e1530246058846.png"
              alt="bootstrap logo"
            />
          </div>
          <h1 class="text-center col-6">Bootstrap 4</h1>
        </div>
      </section>
    </slide>
    <slide :steps="5">
      <div class="row vh-100">
        <div class="col-12">
          <h3 class="pt-4">Indice</h3>
        </div>
        <div class="col-8 offset-2">
          <ul>
            <li v-if="step > 1">¿Que es?</li>
            <li v-if="step > 2">¿Porque bootstrap?</li>
            <li v-if="step > 3">¿Como funciona?</li>
            <li v-if="step > 4">Ejemplo y reto</li>
          </ul>
        </div>
      </div>
    </slide>
    <slide>
      <div class="row vh-100">
        <div class="col-12">
          <h3 class="pt-4">¿Que es?</h3>
        </div>
        <div class="col-8 offset-2">
          <p>
            Bootstrap es el Framework de CSS más popular para desarrollar páginas web "responsivas"
            utilizando una metodologia de "mobile first".
          </p>
        </div>
        <div class="col-8 offset-2 text-center mt-4">
          <h4>¿Ques es un framework?</h4>
          <img
            src="https://q-workshop.com/3266-large_default/round-jar-of-classic-rpg-dice-80.jpg"
            alt
          />
        </div>
      </div>
    </slide>
    <slide :steps="7">
      <div class="row vh-100">
        <div class="col-12">
          <h3 class="pt-4">¿Porque bootstrap? (136k)</h3>
        </div>
        <div class="col-8 offset-2 text-center">
          <div class="row">
            <div class="col-8">
              <p v-if="step > 1">Creado internamente para Twitter por un hackathon</p>
              <p v-if="step > 2">Ahorro de tiempo y facil de usar</p>
              <p v-if="step > 3">Personalizable</p>
            </div>
            <div v-if="step > 3" class="col-4">
              <img src="companies.png" alt="">
            </div>
          </div>
          <div class="row text-center" v-if="step > 4">
            <div class="col-6">Grid system</div>
            <div class="col-6">Responsividad</div>
          </div>
          <div class="row text-center" v-if="step > 5">
            <div class="col-6">Documentación</div>
            <div class="col-6">Open Source</div>
          </div>
          <div v-if="step > 6" class="col-12 row">
            <div class="col-12">Rivales</div>
            <div class="col-4">
              <div class="card text-center h-100">
                <img
                  class="mx-auto w-50"
                  src="data:image/jpeg;base64,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"
                  alt
                />
                <p class="b">Zurb Foundation</p>28,320 Estrellas
              </div>
            </div>
            <div class="col-4">
              <div class="card text-center h-100">
                <img class="mx-auto" src="https://bulma.io/images/bulma-banner.png" alt />
                <p class="b">Bulma</p>37,100 Estrellas
              </div>
            </div>
            <div class="col-4">
              <div class="card text-center h-100">
                <img
                  class="mx-auto w-50"
                  src="https://cdn.tutsplus.com/webdesign/uploads/2013/10/skeleton-retina.png"
                  alt
                />
                <p class="b">Skeleton</p>17,000 Estrellas
              </div>
            </div>
          </div>
        </div>
      </div>
    </slide>
    <slide>
      <div class="row vh-100">
        <div class="col-12">
          <h3 class="pt-4">Como funciona?</h3>
        </div>
        <div class="col-8 offset-2">
          <div class="row">
            <div class="col-7">
              <p>El grid esta conformado por:</p>
              <ul>
                <li>Un contenedor <strong>"container"</strong></li>
                <li>filas <strong>"row"</strong></li>
                <li>12 Columnas <strong>"cols"</strong></li>  
              </ul>
            </div>
            <div class="col-5">
              <img src="grid.png" alt />
            </div>
            <div class="col-12 text-center">
              <img src="grid_example.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </slide>
    <slide :steps="3">
      <div class="row vh-100">
        <div v-if="step >= 1" class="col-12">
          <h3 class="pt-4">Responsividad</h3>
          <div class="col-8 offset-2 text-center">
            <img class="w-50" src="https://www.zeninvader.com/wp-content/uploads/bootstrap-4-grid-col-classes.gif" alt="">
          </div>
        </div>
        <div v-if="step >= 2" class="col-12">
          <h3>Componentes</h3>
          <div class="col-8 offset-2 text-center">
            <img class="w-50" src="https://getbootstrap.com/docs/3.3/assets/img/components.png" alt="">
          </div>
        </div>
        <div v-if="step >= 3" class="col-12">
          <h3>Utilidades</h3>
        </div>
      </div>
    </slide>
    <slide>
      <div class="row vh-100">
        <div class="col-8 offset-2 text-center">
          <div class="row">
            <h3 class="col-12">Reto</h3>
            <div class="col-8">
              <p>Escritorio</p>
              <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1564914815/Challenges/ae67ohzys48frbejvyce.jpg" alt="">
              <p>
                Link: 
                <a href="https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0">https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0</a>
              </p>
            </div>
            <div class="col-4">
              <p>Celular</p>
              <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1564914815/Challenges/orfu3ybrkeyzhe8q9k76.jpg" alt="">
            </div>
          </div>
        </div>
      </div>
    </slide>
  </div>
</template>

<script>
import { Slideshow } from "eagle.js";
export default {
  mixins: [Slideshow]
};
</script>