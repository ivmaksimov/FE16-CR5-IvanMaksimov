class Animals {
    id : number;
    name : string;
    gender : string;
    size: string;
    age: number;
    vaccine: string;
    image: string;
    constructor(id:number, name: string, gender: string, size: string, age:number, vaccine: string, image: string) {
        this.id = id
        this.name = name;
        this.gender = gender;
        this.size = size;
        this.age = age;
        this.vaccine = vaccine;
        this.image = image;
        animalsArray.push(this);
    }
    printCards() {
        return `<div class="card card-shdw" style="width: 30%; ">
        <img src="pics/${this.image}"  class="card-img-top img" alt="...">
        <div class="card-b">
          <h5 class=" title1">${this.name}</h5>
          <div class="info">
            <p class="card-text">Gender: ${this.gender}</p>
            <p class="card-text">Age: ${this.age}</p>
            <p class="card-text">Size: ${this.size}</p>
          </div>
          <button id="${this.id}" onclick="vaccine(${this.id})" class="btn-vaccine" >Vaccine: ${this.vaccine}</button>
        </div>
      </div>`;
    }
    
}

let animalsArray: Array<Animals> = [];

class Cat extends Animals{
    breed: string;
    colorFur: string;
    link: string;
    constructor(id: number, name: string, gender: string, size: string, age:number, vaccine: string, image: string, breed: string, colorFur:string, link:string) {
        super(id, name, gender, size, age, vaccine, image);
        this.breed = breed;
        this.colorFur = colorFur;
        this.link = link;
    }
    printCards() {
        return  `<div class="card card-shdw" style="width: 30%; ">
        <img src="pics/${this.image}"  class="card-img-top img" alt="...">
        <div class="card-b">
          <h5 class=" title1">${this.name}</h5>
          <div class="info">
            <p class="card-text">Gender: ${this.gender}</p>
            <p class="card-text">Age: ${this.age}</p>
            <p class="card-text">Size: ${this.size}</p>
          </div>
          <button id="${this.id}" onclick="vaccine(${this.id})" class="btn-vaccine" >Vaccine: ${this.vaccine}</button>
          <div class="info2">
              <p class="card-text">Breed: ${this.breed}</p>
              <p class="card-text">Color Fur: ${this.colorFur}</p>
              <p class=" "><a target="to_blank" href="${this.link}"> Breed Info</a></p>
              
            </div>
        </div>
      </div>`;
    }
}


class Dog extends Animals{
    breed:string;
    training:string;
    constructor(id:number, name: string, gender: string, size: string, age:number, vaccine: string, image: string, breed: string, training:string) {
        super(id, name, gender, size, age, vaccine, image);
        this.breed = breed;
        this.training = training;
    }
    printCards() {
        return `<div class="card card-shdw" style="width: 30%; ">
            <img src="pics/${this.image}"  class="card-img-top img" alt="...">
            <div class="card-b">
            <h5 class=" title1">${this.name}</h5>
            <div class="info">
            <p class="card-text">Gender: ${this.gender}</p>
            <p class="card-text">Age: ${this.age}</p>
            <p class="card-text">Size: ${this.size}</p>
          </div>
          <button id="${this.id}" onclick="vaccine(${this.id})" class="btn-vaccine" >Vaccine: ${this.vaccine}</button>
          <div class="info2">
              <p class="card-text">Breed: ${this.breed}</p>
              <p class="card-text">Training: ${this.training}</p>
            </div>
        </div>
      </div>`;
    }
}



new Animals(1,"Queen Rasha", "Female", "Small", 2, "Yes", "pic-3.jpg" );
new Animals(2, "Orlana", "Female", "Big", 5, "Yes", "pic-7.jpg" );
new Animals(3, "Umka", "Male", "Small", 4, "Yes", "pic-12.jpg" );
// new Animals("Dank", "Male", "Big", 3, "Yes", "pic-10.jpg" );
// new Animals("Ninja", "Male", "Small", 12, "Yes", "pic-15.jpg" );
// new Animals("Felix", "Male", "Medium", 5, "Yes", "pic-9.jpg" );
// new Animals("Skye", "Female", "Medium", 7, "Yes", "pic-11.jpg" );
// new Animals("Ruman", "Male", "Medium", 5, "Yes", "pic-17.jpg" );
// new Animals("Vivi", "Female", "Small", 6, "Yes", "pic-20.jpg" );
// new Animals("Frigie", "Female", "Big", 2, "Yes", "pic-18.jpg" );
// new Animals("Quinton", "Male", "Medium", 6, "Yes", "pic-13.jpg" );
// new Cat("Zap", "Male", "Small", 2, "Yes", "pic-5.jpg", "Maine Cocon", "Tortie", "Dilute Color Fur Gene");
// new Cat("Zakky", "Male", "Small", 6, "Yes", "pic-6.jpg", "European Shorthair", "Chocolate", "Dilute Color Fur Gene");
// new Cat("Himalaya", "Female", "Small", 4, "Yes", "pic-8.jpg", "Russian Blue", "Cream", "Dilute Color Fur Gene");
// new Cat("Desert Rose", "Female", "Small", 2, "Yes", "pic-16.jpg", "American Wirehair", "Snowshoe", "Dilute Color Fur Gene");
// new Cat("Eulalia", "Female", "Small", 1, "Yes", "pic-19.jpg", "Exotic Shorthair", "Bicolor", "Dilute Color Fur Gene");
// new Cat("Tyler", "Male", "Small", 5, "Yes", "pic-21.jpg", "Ocicat", "Locket", "Dilute Color Fur Gene");
// new Dog("Omarion", "Male", "Medium", 5, "Yes", "pic-1.jpg", "Britany", "Yes");
// new Dog("Berny", "Male", "Small", 4, "Yes", "pic-14.jpg", "Labrador", "Yes");
// new Dog("Todd", "Male", "Small", 1, "Yes", "pic-22.jpg", "Siberian Husky", "No");
// new Dog("Nola", "Female", "Small", 2, "Yes", "pic-23.jpg", "English Cocker Spaniel", "No");
// new Dog("Nessa", "Female", "Small", 5, "Yes", "pic-24.jpg", "Golden Retriver", "Yes");

let main = (document.getElementById("main") as HTMLElement);


let mainCardsPrint = () => {
    animalsArray.forEach((animal) => {
        main.innerHTML += animal.printCards();
    })
}

mainCardsPrint();

 let btnVaccine: Element[] = [];

 
 
let vaccine = (id:number)=> {
    // let selected = id;
    let search = animalsArray.find((x)=> x.id === id);
    console.log(search)
    let message = (document.getElementById(id)as HTMLElement);
    console.log(message)

    if (search?.vaccine === "Yes") {
        message.innerHTML=`Vaccine: No`;
        search.vaccine = "No";
        message.style.backgroundColor = "red";
        console.log(search.vaccine)
    } else  {
        message.innerHTML=`Vaccine: Yes`;
        search.vaccine = "Yes";
        message.style.backgroundColor = "green";
    }
    
    
    }

    
