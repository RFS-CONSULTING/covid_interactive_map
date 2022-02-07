// console.log(json_Activites_vaccination_covid19_2);

// var selectVille = document.querySelector('#select_vaccin select');
// var selectVilleResult = document.querySelector('#activite_vaccin_result');

// var options = '';
// const vacLength = json_Activites_vaccination_covid19_2.features.length;

// for (let index = 0; index < vacLength; index++) {
//     var elOption = document.createElement('option');
//     elOption.innerText = json_Activites_vaccination_covid19_2.features[index].properties.CHEF_LIEU;
//     selectVille.appendChild(elOption);
// }

// selectVille.addEventListener('change',function(e){
//     selectVilleResult.innerHTML = '';
//     var ville = e.target.value;
//     var results = {}
//     for (let index = 0; index < vacLength; index++) {
        
//         if (json_Activites_vaccination_covid19_2.features[index].properties.CHEF_LIEU === ville) {
//             results = json_Activites_vaccination_covid19_2.features[index].properties;
//         }
        
//     }
//     var ul = document.createElement("ul");
    
//     for (const item in results) {
//         console.log(item)
//        var li = document.createElement('li')
//        li.innerText = `${item}: ${results[item]}`
//        ul.appendChild(li);
//     }
//     selectVilleResult.appendChild(ul);

// })
// var fn = (e)=>{
//     var currentLayer = e.target;
//     console.log(currentLayer)
//     console.log(currentLayer.feature);

//     map.fitBounds(currentLayer.getBounds());
// }
// layer_Activites_vaccination_covid19_2.on({
//     click:fn
// })