var sitcovid_nom = document.querySelector('#input_sitcovid_nom')
var sitcovid_superf = document.querySelector('#input_sitcovid_superf')
var sitcovid_newsc = document.querySelector('#input_sitcovid_newcas')

var activites_vaccin_local_event = function(e){
    var target = e.target;
    console.log(target)
    // sitcovid_nom.value = e.target.feature.properties.NOM
    sitcovid_nom.value = e.target.feature.properties.NOM
    sitcovid_superf.value = e.target.feature.properties.SURFACE
    sitcovid_newsc.value = e.target.feature.properties['Joint_Nouveau Cas Covid-19 (30/12/2021)']
}