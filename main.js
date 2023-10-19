//Constructor de la lista de perros.
class doglistBuilder {
    constructor(id,name,image,breed,age,color,size,gender,personality){
        this.id=id;
        this.name=name;
        this.image=image;
        this.breed=breed;
        this.age=age;
        this.color=color;
        this.size=size;
        this.gender=gender;
        this.personality=personality;
    }
};
//Declaracion lista de perros
const dogList=[];
dogList.push(new doglistBuilder("1","Jay","image","huskysiberiano","2","white","big","male","sociable"));
dogList.push(new doglistBuilder("2","Nunu","image","goldenretriever","1","beige","male","medium","sociable"));
dogList.push(new doglistBuilder("3","Ginger","image","caniche","0","beige","small","female","playful"));
dogList.push(new doglistBuilder("4","Marley","image","germansheperd","0","brown","small","male","fearless"));
dogList.push(new doglistBuilder("5","Bella","image","yorkshireterrier","1","white","small","female","timid"));
dogList.push(new doglistBuilder("6","Luna","image","dalmatian","1","white","medium","female","sociable"));
dogList.push(new doglistBuilder("7","Charlie","image","boxer","3","brown","big","male","playful"));
dogList.push(new doglistBuilder("8","Cooper","image","chihuahua","1","black","small","male","fearless"));
dogList.push(new doglistBuilder("9","Milo","image","englishBulldog","1","white","medium","male","timid"));
dogList.push(new doglistBuilder("10","Max","image","beagle","0","brown","small","male","curious"));
//Banderas para los ciclos
let banners=[0,0,0,0];

//Bucle Principal
do{
    banners[1]=0;
    //Muestra todos los perros
    alert("Welcome to A Dog's Joy Adoption Refugee");
    dogList.forEach(item => {
        alert(`id:${item.id} 
        name:${item.name} 
        image:${item.image} 
        breed:${item.breed} 
        age:${item.age}`);
    });
    let userAnswer= prompt("If you wish to sort them by age write yes").toLowerCase();
    //Muestra todos los perros ordenados por edad de menor a mayor.
    if (userAnswer==="yes"){
        ageSorted= dogList.sort((a,b) =>  a.age-b.age);
        ageSorted.forEach(item => {
            alert(`id: ${item.id}
            name: ${item.name} 
            image: ${item.image} 
            breed: ${item.breed} 
            age: ${item.age}`);
        });
    }
    do{
    banners[2]=0;
    //Filtro para raza
    let categoryAnswer= prompt("Please, write a breed category to shorten the quantity of dogs available for adopting. Write back to go back to the main selection of dogs that are available").toLowerCase();
    let found= dogList.find((item) => item.breed === categoryAnswer);
    if(found){
        alert("Here I show the window of dogs available in the page");
        let filtered = dogList.filter((item)=>item.breed ===categoryAnswer);
        filtered.forEach(item => {
            alert(`id: ${item.id}
            name: ${item.name} 
            image: ${item.image} 
            breed: ${item.breed} 
            age: ${item.age}`);
        });
        do{
        banners[3]=0;
        //Filtros para edad, color, tamaño, genero y personalidad
        let filterAnswer= prompt("Our filter options are age, color,size, category,gender and personality. Write back to go back to the last filter. Please select").toLowerCase();
        switch(filterAnswer){
            case "age":
                let ageAnswer=prompt("Age available ranges from 0 to 10 years").toLowerCase();
                let filteredAgeFind = filtered.find((item)=>item.age===ageAnswer);
                if(filteredAgeFind){
                let filteredAge = filtered.filter((item)=>item.age ===ageAnswer);
                filteredAge.forEach(item => {
                    alert(`id: ${item.id}
                    name: ${item.name} 
                    image: ${item.image} 
                    breed: ${item.breed} 
                    age: ${item.age}`);
                });
                dogRequest(filteredAge);
                }else{
                    alert("That option does not exist within the given filter")
                }
                break
            case "color":
                let colorAnswer=prompt("Colors available are black, beige, white, brown, gray").toLowerCase();
                let filteredColorFind = filtered.find((item)=>item.color===colorAnswer);
                if(filteredColorFind){
                let filteredColor = filtered.filter((item)=>item.color ===colorAnswer);
                filteredColor.forEach(item => {
                    alert(`id: ${item.id}
                    name: ${item.name} 
                    image: ${item.image} 
                    breed: ${item.breed} 
                    age: ${item.age}
                    color: ${item.color}`);
                });
                dogRequest(filteredColor);
                }else{
                    alert("That option does not exist within the given filter")
                }
                break
            case "size":
                let sizeAnswer=prompt("Sizes available are small, medium and big").toLowerCase();
                let filteredSizeFind = filtered.find((item)=>item.size===sizeAnswer);
                if(filteredSizeFind){
                let filteredSize = filtered.filter((item)=>item.size ===sizeAnswer);
                filteredSize.forEach(item => {
                    alert(`id: ${item.id}
                    name: ${item.name} 
                    image: ${item.image} 
                    breed: ${item.breed} 
                    age: ${item.age}
                    size: ${item.size}`);
                });
                dogRequest(filteredSize);
                }else{
                    alert("That option does not exist within the given filter")
                }
                break
            case "gender":
                let genderAnswer=prompt("Genders are male and female").toLowerCase();
                let filteredGenderFind = filtered.find((item)=>item.gender===genderAnswer);
                if(filteredGenderFind){
                let filteredGender = filtered.filter((item)=>item.gender ===genderAnswer);
                filteredGender.forEach(item => {
                    alert(`id: ${item.id}
                    name: ${item.name} 
                    image: ${item.image} 
                    breed: ${item.breed} 
                    age: ${item.age}
                    gender: ${item.gender}`);
                });
                dogRequest(filteredGender);
                }else{
                    alert("That option does not exist within the given filter")
                }
                break
            case "personality":
                let personalityAnswer=prompt("Personality traits availables are timid, curious, playful, sociable, fearless").toLowerCase();
                let filteredPersonalityFind = filtered.find((item)=>item.personality===personalityAnswer);
                if(filteredPersonalityFind){
                let filteredPersonality = filtered.filter((item)=>item.personality ===personalityAnswer);
                filteredPersonality.forEach(item => {
                    alert(`id: ${item.id}
                    name: ${item.name} 
                    image: ${item.image} 
                    breed: ${item.breed} 
                    age: ${item.age}
                    personality: ${item.personality}`);
                });
                dogRequest(filteredPersonality);
                }else{
                    alert("That option does not exist within the given filter")
                }
                break
            case "back":
                banners[2]=1;
                break
            default:
                alert("Filter option doesn't exist. Please try again")
            break
        }
        }while(banners[2]===0);
    }else if(categoryAnswer==="back"){
        banners[1]=1;
    }else{
        alert("Breed category doesn't exist. Please try again")
    }
    }while(banners[1]===0);
}while(banners[0]===0);

//Funcion para la generacion de la solicitud del usuario a la pagina cuya entrada es el arreglo de objetos actual de la lista de perros.
function dogRequest(doglistFiltered){
    let dogselectedId= prompt("Please write the id of the dog you want from the list");
    let dogSelectedFind= doglistFiltered.find((item) => item.id === dogselectedId);
    if (dogSelectedFind){
    let dogSelected= doglistFiltered.filter((item) => item.id === dogselectedId);
    alert("Showing all the details of the chosen dog");
    dogSelected.forEach(item => {
        alert(`id: ${item.id}
        name: ${item.name}
        image: ${item.image}
        breed: ${item.breed}
        age: ${item.age}
        color: ${item.color}
        size: ${item.size}
        gender: ${item.gender}
        personality: ${item.personality}`);
    });
    do{
    let userdogChoice = prompt("Please write adopt, sponsor or back to return to the last filter, depending on what you want").toLowerCase();
    switch(userdogChoice){
        case "adopt":
            alert("Here I show a notification of the dog selected to the user saying that the refugee will be notified and an email will arrive to him/her, so the request can be processed and an appointment set for him/her to come to the refugee. Then save the user information, the request, send it to database and then request an email for the user and the agent.");
            banners[3]=1;
            break
        case "sponsor":
            alert("Here I show a notification of the dog selected to the user saying that the refugee will be notified and an email will arrive to him/her, so the request can be processed and an appointment set for him/her to come to the refugee. Then save the user information, the request, send it to database and then request an email for the user and the agent.");
            banners[3]=1;
            break
        case "back":
            banners[3]=1;
            break
        default:
            alert("Wrong answer. Please try again");
            break
    }
    }while(banners[3]===0);
}else{
    alert("That id does not exist within that filter");
}
};