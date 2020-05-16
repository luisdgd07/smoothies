<template>
    <div class="container col-md-7">
        <div class="mt-4">
        <v-btn to="/" class="primary mr-4"><i class="fas fa-home mr-2"></i>Atras</v-btn>
        <v-btn class="primary" @click="expand = !expand"><img src="@/assets/smoothieb.png" width="30" height="30" alt="">Nuestros Smoothies</v-btn>
        </div>
        <div>
        <v-expand-transition>

        <v-card v-show="expand" rounded
        tile>
        <h2 class="title text-white text-center mt-2">Nuestros Smoothies</h2>

                    <v-list rounded>
      
      <v-list-item-group  color="primary">
        <v-list-item>
            <div>
          <h5 class="mr-2 text-center">Smoothie</h5>

              <v-progress-circular
      :value="90"
      :size="40"
      color="deep-orange lighten-2"
      class="text-center  mr-2"
    ><i class="fas fa-fire"></i> </v-progress-circular>
              <v-progress-circular
      :value="90"
      :size="40"
      color="danger"
      class="text-center mr-2"
    ><i class="fas fa-heart"></i> > </v-progress-circular>
            <h6 class="text-center"> </h6>
            </div>
  
                <div class="">
                    <p class=""><strong> Liquido:</strong> items.liquid </p>
                    <p class=""><strong> Proteina:</strong> items.protein</p>
                                    
                    <p class=""> <strong>Frutas: </strong>items.fruits</p>
                </div>
        </v-list-item>
      </v-list-item-group>
    </v-list>
        </v-card>
</v-expand-transition>

    </div>

      <v-form @submit.prevent="Agregar() " class=" card mt-4" >
        <h3 class="title card-header text-white text-center">Crear tu Smoothie</h3>
        <div class="card-body">
<div class="input-group mt-2 ">
            <div class="col-md-5">
                <h5 class="text-center mt-3">Nombre:</h5>
            </div>
            <div class="col-md-7">
                          <v-text-field
            solo
            clearable
             v-model="smoothies.name"
             required
          ></v-text-field>
            </div>
        </div>
        <div class="input-group ">
            <div class="col-md-5 mt-2">
            <h5 class="text-center">Agregar frutas:</h5>
            </div>
            <div class="col-md-5 ">
            <!-- <select ref="listfruits" class="form-control">
                <option name="fruta"  v-for="(frutas,index) in fruits" :key="index" > {{frutas.name}} - {{frutas.value}} </option> 
            </select> -->
                      <v-select
                      v-model="frutaSelec"
           name="fruta"
            :items="fruits"
            solo
          >
           </v-select> 
            </div>
            <v-btn name="agrega" class="mx-auto mt-4  " primary @click="agregarFruta(frutaSelec)"> <i class="fas fa-plus"></i></v-btn>
        </div>
        
        <h5 class="my-1 text-center">Frutas:</h5>
        <div class="input-group mt-1 col-md-12">
    <v-textarea
      clearable
      solo
      disabled
      clear-icon="cancel"
      v-model="smoothies.fruits"
    ></v-textarea>
        </div>

        <div class="input-group mt-2">
            <div class="col-md-5">
            <h5 class="text-center">Selecciona Liquido:</h5>
            </div>
            <!-- <v-select  v-model="smoothies.liquid" required class="form-control">
                <option v-for="liquidos in liquids">{{liquidos.name}} - {{liquidos.value}} </option>
            </v-select> -->
                                  <v-select
                      ref="listfruits"
           name="fruta"
            :items="liquids"
            solo
            required
          >
           </v-select> 
        </div>
        <div class="input-group mt-2">
            <div class="col-md-5">
            <h5 class="text-center">Selecciona proteina:</h5>
            </div>
            <!-- <select v-model="smoothies.protein " required class="form-control">
                <option v-for="proteinas in proteins">{{proteinas.name}}</option> 
            </select> -->
                                  <v-select
                      ref="protein"
           name="fruta"
            :items="fruits"
            solo
            required
          >
           </v-select> 
        </div>
        <div class="input-group mt-2">
            <div class="col-md-5">
            <h5 class="text-center">Selecciona sabor:</h5>
            </div>
            <v-text-field v-model="smoothies.taste" solo max="100" min="0" type="number" required ></v-text-field>
        </div>
        <div class="mx-auto text-center">
                  <v-btn class="success my-5 mx-5 " type="submit"><i class="fas fa-check-circle mr-2"></i>Crear Smoothie  </v-btn>
          <b-button class="warning my-5" @click="limpiar"><i class="fas fa-trash mr-2"></i>Limpiar  </b-button>
        </div>

        </div>
        

      </v-form>
    </div>
</template>
<script>
export default {
    data(){
      return{
                items: ['foo', 'bar', 'fizz', 'buzz'],
      value: ['foo', 'bar', 'fizz', 'buzz'],
        dismissSecs:8,
        dismissCountDown:0,
        expand: false,
        frutaSelec:'',
        mensaje:{color:'',texto:''},
        fruits:[
            'Watermelon - 6',
            'Strawberry - 5', 
            'Pineapple - 8', 
            'Orange - 10',
            'Kiwi - 7',
            'Banana - 9',
            'Limes -4'
        ],
        liquids:[
            'Leche - 4',
            'Agua - 0', 
            'Agua de coco - 2',
            'Leche de soya - 3', 
            'Leche de almendras - 1'
        ],
        proteins:[
            'Vainilla',
            'Chocolate',
            'Coco',
            'Caramelo',
            'Sin sabor'
        ],
        smoothies:{
            name:'',
            fruits:'',
            liquid:'',
            protein:'',
            heart:0,
            taste:100
        },
      }
  },
  beforeCreate() {
     expand: false
  },
  methods: {
      alerta(color,mensaje){
          this.mensaje.color=color;
          this.mensaje.texto=mensaje;
          this.showAlert();
      },
      Agregar(){
        this.smoothies.heart+=parseInt(this.smoothies.liquid.substring(this.smoothies.liquid.indexOf('- ')+2));
        this.smoothies.liquid=this.smoothies.liquid.substring(0,this.smoothies.liquid.indexOf('-'));
          this.axios.post('/nuevo',this.smoothies).then(res=>{
            this.alerta('success','Smoothie creado');
            this.limpiar();
          }).catch(e=>{
              this.alerta('danger','Error al crear smoothie ');
              });
              
      },
      countDownChanged(dismissCountDown){
          this.countDownChanged=dismissCountDown;
      },
      showAlert(){
          this.dismissCountDown=this.dismissSecs;
      },
      agregarFruta(fruta){
          if(this.smoothies.fruits===''){
            this.smoothies.fruits=fruta.substring(0,fruta.indexOf('-'));
          }
         else{
              this.smoothies.fruits=this.smoothies.fruits+', '+fruta.substring(0,fruta.indexOf('-'));
         }
          this.smoothies.heart+=parseInt(fruta.substring(fruta.indexOf('- ')+2));
      },
      limpiar(){
        this.smoothies.name='';
        this.smoothies.fruits='';
        this.smoothies.fruits='';
        this.smoothies.heart=0;
        this.smoothies.taste=100;
      }
  },

}
</script>
<style>
.card-body{
    background:#fafafa;
    
}
.card{
    background: #fafafa;
}
.title{
    background:#e40faf;
}
a:hover{
  text-decoration: none;
}
</style>