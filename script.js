function getRandomImage() {
    //declare an array to store the images
    var randomImage = new Array();
    randomImage = ["/X/alia.jpg","/X/amanda.jpg","/X/callie.jpg","/X/ella.jpg","/X/indira.jpg","/X/lia.jpg","/X/lyn.jpg","/X/raisha.jpg","/M/Adzana_Shaliha.jpg","/M/angelina_christy.jpg","/M/azizi_asadel.jpg","/M/dhea_angelia.jpg","/M/cornelia_vanisa.jpg","/M/febriola_sinambela.jpg","/M/feni_fitriyanti.jpg","/M/fiony_alveria.jpg","/M/flora_shafiq.jpg","/M/fransisca_saraswati_puspa_dewi.jpg","/M/freya_jayawardana.jpg","/M/gita_sekar_andarini.jpg","/M/helisma_putri.jpg","/M/indah_cahya.jpg","/M/jessica_chandra.jpg","/M/jesslyn_callista.jpg","/M/jinan_safa_safira.jpg","/M/kathrina_irene.jpg","/M/lulu_salsabila.jpg","/M/marsha_lenathea.jpg","/M/mutiara_azzahra.jpg","/M/reva_fidela.jpg","/M/shania_gracia.jpg","/M/shani_indira_natio.jpg","/M/yessica_tamara.jpg"];

    console.log(randomImage.length);

    //generate a number and provide to the image to generate randomly
    var number = Math.floor(Math.random()*randomImage.length);

    //return the images generated by a random number
    return document.getElementById("result").innerHTML = '<img width="150px" src="https://rebornian48.github.io/sorter/img'+randomImage[number]+'" />';
}