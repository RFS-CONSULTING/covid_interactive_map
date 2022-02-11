var sitcovid_nom = document.querySelector('#input_sitcovid_nom')
var sitcovid_superf = document.querySelector('#input_sitcovid_superf')
var sitcovid_newsc = document.querySelector('#input_sitcovid_newcas')
var sitcovid_oldc = document.querySelector('#input_sitcovid_oldcas')

var activites_vaccin_local_event = function(e){
    var target = e.target;
    // console.log(e.target.feature.properties)
    // sitcovid_nom.value = e.target.feature.properties.NOM
    sitcovid_nom.value = e.target.feature.properties.NOM
    sitcovid_superf.value = e.target.feature.properties.SURFACE + ' Km²'
    sitcovid_newsc.value = e.target.feature.properties['Joint_Nouveau Cas Covid-19 (30/12/2021)']?e.target.feature.properties['Joint_Nouveau Cas Covid-19 (30/12/2021)']:'0'
    sitcovid_oldc.value = e.target.feature.properties['Joint_Nbre de Cas Covid-19']
}