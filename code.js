Vue.createApp({
    data() {
        return {
            information: {
                name: "Eric Valentin Mogica Carbajal",
            }
        };
    }
}).mount("#Nombre");

Vue.createApp({
    data() {
        return {
            words: ["Jugar League of Legends", "Pasar tiempo con mis amigos", "Bailar Cumbias", "Escuchar musica", "Leer"]
        };
    }
}).mount("#Pasatiempos");

Vue.createApp({
    data() {
        return {
            picsumImage: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S2_1200x1600-7fd64f0f7b674900bdd172967865d545"
        };
    }
}).mount("#Imagen");


Vue.createApp({
    data() {
        return {
            IMP: [
                "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_LeagueofLegends_RiotGames_S2_1200x1600-7fd64f0f7b674900bdd172967865d545", "Pasar tiempo con mis amigos",
                "https://cdn1.matadornetwork.com/blogs/2/2019/06/cumbias-mexicanas-shutterstock_1127678003.jpg",
                "https://s1.eestatic.com/2019/09/04/elandroidelibre/el_androide_libre_426720170_179609163_1706x960.jpg",
                "https://los40.com/los40/imagenes/2021/08/16/bigbang/1629133288_216225_1629133389_gigante_normal.jpg"]
        };
    }
}).mount("#IMP");

Vue.createApp({
    data() {
        return {
            counter: 0
        }
    }
}).mount("#ContadorCool")

Vue.createApp({
    data() {
        return {
          message: ''
        }
      }     
}).mount("#Alerts")