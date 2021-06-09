const cityName = $('#input')
const renderer = new Renderer()
const managementCity = new ManagementCity()

$('#searchBtn').on('click',async function(){
    await managementCity.getCityData(cityName.val())
    cityName.val('')
    renderer.renderData(managementCity.cityData)
})

const loadData = async function(){
   await managementCity.getDataFromDB()
   await renderer.renderData(managementCity.cityData)
}

$('.citiesCards').on('click','.btn-save',async function(){
    let nameCity = $(this).closest('.city').find('p').text()
    
    await managementCity.saveCity(nameCity)
   
    renderer.renderData(managementCity.cityData)
})

$('.citiesCards').on('click','.btn-delete',async function(){
    let nameCity = $(this).closest('.city').find('p').text()
    await managementCity.deleteCityFromDB(nameCity)
    
    loadData()
})

loadData()