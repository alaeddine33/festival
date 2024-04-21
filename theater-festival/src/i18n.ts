import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    fr: {
      translation: {
        "presentation": "Texte de présentation en français"
      }
    },
    es: {
      translation: {
        "presentation": {
            "title": "Es un caso insólito el del Festival Don Quijote de París. Y por varias razones.",
            "text": "No existe ninguna muestra, dentro y fuera de España, que con tan pocos medios haya hecho\ntanto por dar a conocer el teatro español que se ha hecho en las últimas tres décadas. Tanto el\nescrito por autores que podemos situar desde el medioevo (maravilloso trabajo el de José Luis\nGómez con los cantares de gesta o los trabajos de Ana Zamora partiendo de la baja Edad Media),\npasando por cualquier otro desde el barroco hasta lo más innovador creado hace pocos meses.\nPero lo más importante es que se ha dado a conocer no a través de grandes producciones\npúblicas o privadas, sino con montajes en los que ha primado el talento, a falta de presupuesto,\npuestos en pie por grandes creadores escénicos que este festival fichó hace diez, veinte o treinta\naños, y en muchas ocasiones cuando aún eran desconocidos, pero que regresan una vez y otra a\neste festival, cuando la producción y el cachè lo permite, y a veces aunque no lo permita, ya que\nson muchas las compañías que hacen “una rebaja” al Don Quijote, al frente del cual está la figura\nimprescindible y entusiasta de Luis Jiménez y su grupo Zorongo, fundado en 1989 con el objetivo\nde crear, producir y difundir el teatro en lengua española en Francia, y con idéntica intención y\ndesde esa estructura crea el Festival Don Quijote en 1992.",
            "text2": "Nada ni nadie ha dado a conocer el teatro contemporáneo en español como esta pequeña gran\nmuestra por la que han desfilado, y en repetidas ocasiones, nombres escénicos fundamentales\ncomo La Zaranda, Animalario, Els Joglars, Ur Teatro, Geroa, Bambalina, Zascandil, Tantaratana,\nAtalaya, Corsario, Tanttaka, Uroc, Micomicon, Histrión, T de Teatre, Nao d’Amores y, entre otros\nmuchos y como es lógico, Zorongo, que pone en pie textos en francés de autores españoles.",
            "text3": "Junto a ellos nombres propios que componen la historia de lo fundamental del teatro actual en\nnuestro país: José Luis Gómez, Rafael Álvarez El Brujo, Ernesto Caballero, toda la familia\nMargallo, Juan Cavestany, Alberto San Juan, Andrés Lima, Ana Zamora, Helena Pimenta, Carles\nAlfaro, Roberto Cerdá, Sergi Belbel, Fernando Urdiales, Eduardo Vasco, José Carlos Plaza,\nAlfredo Sanzol, Alberto Conejero, Itziar Pascual, y toda una larga lista en la que no falta casi\nnadie.",
            "text4": "Renglón aparte hay que destacar la presencia de cantantes y cantaores como Carmen Linares,\nEnrique Morente, Amancio Prada, Carmen París y otros muchos.",
            "text5": "El Festival Don Quijote de París es un caso insólito en el panorama cultural francés, y en el\npanorama cultural europeo, y en el panorama cultural mundial. Y por eso, y por muchas otras\nrazones, es un caso insólito que merece ser estudiado, analizado, valorado y, sobre todo,\nimitado.",
            "text6": "Sin olvidar que todos los años acuden dos o tres grupos latinoamericanos entre los que se ha\npodido ver a los aclamados argentinos de Timbre 4, con Claudio Tolcachir al frente, los\necuatorianos de Malayerba, y las mejores formaciones de teatro y danza de Latinoamérica.",
            "text7": "Pero esta muestra ha ido mucho más allá de dar a conocer las últimas tendencias y corrientes del\nteatro contemporáneo en español. Ha ofrecido numerosas lecturas dramatizadas de obras de\nautores en lengua original española y otras traducidas al francés, que en muchas ocasiones ha\neditado. Ha colaborado con importantes organismos franceses como el Théâtre National de la\nChaillot y la Universidad de la Sorbona (a la que va a donar todo el material del festival). Ha\nplanteado debates en todas sus ediciones y así mismo ha organizado mesas redondas en las que\nhan participado reconocidos profesionales de la cultura española como un consagrado Fernando\nArrabal, Luis García Montero (cuando aún era un joven poeta y catedrático), Benjamín Prado,\n\nAlmudena Grandes, Lluís Pasqual, Sanchis Sinisterra, Juan Mayorga, Fermín Cabal, Luis Mateo\nDiez, José Monleón, Mauricio Rosencof y la presencia casi permanente del que desde hace\nmuchos años es presidente de honor del Festival Don Quijote, el prestigiado hispanista y\ncervantista francés Jean Canavaggio.",
            "text8": "Los nombres son muchos, pero todos tienen en común la excelencia de sus trabajos y el\nreconocimiento unánime por parte de la crítica y de los espectadores. A todo ello un plus de\nsensibilidad por parte de la organización del Festival hacia algo que está ligado a nuestra cultura,\ncomo ha sido la dedicatoria del festival a la memoria de los exiliados republicanos, o el empeño\nen dar a conocer la labor de las Misiones Pedagógicas en las que tanto empeño personal puso\nAntonio Machado logrando arrastrar a lo mejor de la cultura de la II República Española, con el fin\nde ir desterrando el analfabetismo de la población española.",
            "text9": "Echando la mirada hacia el pasado, el presente y el futuro, la historia del Festival Don Quijote de\nParís es la de uno de esos milagros que se dan muy pocas veces y detrás del cual, como muchas\nveces ocurre, no hay un santo, sino una persona excepcional que durante treinta años ha\nconseguido proyectar lo mejor de nuestro universo escénico para dar a conocer a los interesados\nen la cultura y la lengua en español todo lo concerniente al teatro, la música, la danza y el\npensamiento de nuestra lengua.",
            "text10": "Así pues y con este impoluto e impresionante historial sólo se puede desear ¡larga vida al Festival\nDon Quijote!"
        }
      }
    }
  },
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;