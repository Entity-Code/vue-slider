// carousel

var app = new Vue({
   // elemento da selezionare
   el: "#app",
   // dati
   data: {
      fotoIndex: 0, //parto dalla foto 0
      foto: ["img/image1.jpg", "img/image2.jpg", "img/image3.jpg","img/image4.jpg"],
   },
   methods: {
      //ogni click avanza di un immagine
      nextFoto: function () {
         this.fotoIndex++
         //ritorna alla prima
         if (this.fotoIndex > (this.foto.length-1)) {
            this.fotoIndex = 0;
         }
         console.log(this.fotoIndex);
      },

      //ogni click indietreggia di un immagine
      prevFoto: function () {
         this.fotoIndex--
         //ritorna all'ultima
         if (this.fotoIndex < 1) {
            this.fotoIndex = 3;
         }
         console.log(this.fotoIndex);
      }
   }
});
