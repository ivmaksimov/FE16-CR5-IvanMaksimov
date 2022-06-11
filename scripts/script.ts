class Animals {
    id : any;
    name : string;
    gender : string;
    size: string;
    age: number;
    vaccine: string;
    image: string;
    constructor(id:any, name: string, gender: string, size: string, age:number, vaccine: string, image: string) {
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.size = size;
        this.age = age;
        this.vaccine = vaccine;
        this.image = image;
        animalsArray.push(this);
    }
    printCards() {
        return `<div class="card card-shdw cards" >
        <img src="pics/${this.image}"  class="pic card-img-top img" alt="...">
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
    constructor(id: any, name: string, gender: string, size: string, age:number, vaccine: string, image: string, breed: string, colorFur:string, link:string) {
        super(id, name, gender, size, age, vaccine, image);
        this.breed = breed;
        this.colorFur = colorFur;
        this.link = link;
    }
    printCards() {
        return  `<div class="card card-shdw cards"  >
        <img src="pics/${this.image}"  class="pic card-img-top img" alt="...">
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
    constructor(id:any, name: string, gender: string, size: string, age:number, vaccine: string, image: string, breed: string, training:string) {
        super(id, name, gender, size, age, vaccine, image);
        this.breed = breed;
        this.training = training;
    }
    printCards() {
        return `<div class="card card-shdw cards" >
            <img src="pics/${this.image}"  class="pic card-img-top img" alt="...">
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



new Animals(1,"Queen Rasha", "Female", "Small", 2, "<i class='bi bi-award'></i>", "pic-3.jpg" );
new Animals(2, "Orlana", "Female", "Big", 5, "<i class='bi bi-clipboard2-x'></i>", "pic-7.jpg" );
new Animals(3, "Umka", "Male", "Small", 4, "<i class='bi bi-clipboard2-x'></i>", "pic-12.jpg" );
new Animals(4, "Dank", "Male", "Big", 3, "<i class='bi bi-clipboard2-x'></i>", "pic-10.jpg" );
new Animals(5, "Ninja", "Male", "Small", 12, "<i class='bi bi-award'></i>", "pic-15.jpg" );
new Animals(6, "Felix", "Male", "Medium", 5, "<i class='bi bi-clipboard2-x'></i>", "pic-9.jpg" );
new Animals(7, "Skye", "Female", "Medium", 7, "<i class='bi bi-award'></i>", "pic-11.jpg" );
new Animals(8, "Ruman", "Male", "Medium", 5, "<i class='bi bi-clipboard2-x'></i>", "pic-17.jpg" );
new Animals(9, "Vivi", "Female", "Small", 6, "<i class='bi bi-clipboard2-x'></i>", "pic-20.jpg" );
new Animals(10, "Frigie", "Female", "Big", 2, "<i class='bi bi-award'></i>", "pic-18.jpg" );
new Animals(11, "Quinton", "Male", "Medium", 6, "<i class='bi bi-award'></i>", "pic-13.jpg" );
new Cat(12, "Zap", "Male", "Small", 2, "<i class='bi bi-clipboard2-x'></i>", "pic-5.jpg", "Maine Cocon", "Tortie", "https://en.wikipedia.org/wiki/Maine_Coon");
new Cat(13, "Zakky", "Male", "Small", 6, "<i class='bi bi-award'></i>", "pic-6.jpg", "European Shorthair", "Chocolate", "https://en.wikipedia.org/wiki/European_Shorthair");
new Cat(14, "Himalaya", "Female", "Small", 4, "<i class='bi bi-clipboard2-x'></i>", "pic-8.jpg", "Russian Blue", "Cream", "https://en.wikipedia.org/wiki/Russian_Blue");
new Cat(15, "Desert Rose", "Female", "Small", 2, "<i class='bi bi-clipboard2-x'></i>", "pic-16.jpg", "American Wirehair", "Snowshoe", "https://en.wikipedia.org/wiki/American_Wirehair");
new Cat(16, "Eulalia", "Female", "Small", 1, "<i class='bi bi-award'></i>", "pic-19.jpg", "Exotic Shorthair", "Bicolor", "https://en.wikipedia.org/wiki/Exotic_Shorthair");
new Cat(17, "Tyler", "Male", "Small", 5, "<i class='bi bi-award'></i>", "pic-21.jpg", "Ocicat", "Locket", "https://en.wikipedia.org/wiki/Ocicat");
new Dog(18, "Omarion", "Male", "Medium", 5, "<i class='bi bi-clipboard2-x'></i>", "pic-1.jpg", "Britany", "Yes");
new Dog(19, "Berny", "Male", "Small", 4, "<i class='bi bi-award'></i>", "pic-14.jpg", "Labrador", "Yes");
new Dog(20, "Todd", "Male", "Small", 1, "<i class='bi bi-clipboard2-x'></i>", "pic-22.jpg", "Siberian Husky", "No");
new Dog(21, "Nola", "Female", "Small", 2, "<i class='bi bi-award'></i>", "pic-23.jpg", "English Cocker Spaniel", "No");
new Dog(22, "Nessa", "Female", "Small", 5, "<i class='bi bi-clipboard2-x'></i>", "pic-24.jpg", "Golden Retriver", "Yes");

let main = (document.getElementById("main") as HTMLElement);




let mainCardsPrint = () => {
    for (let i in animalsArray) {
    
        if (animalsArray[i].vaccine === "<i class='bi bi-award'></i>"){
        main.innerHTML += animalsArray[i].printCards();
         (document.getElementById(animalsArray[i].id)as HTMLElement).style.backgroundColor = "green";
    } else {
      main.innerHTML += animalsArray[i].printCards();
      (document.getElementById(animalsArray[i].id)as HTMLElement).style.backgroundColor = "red";
    }
  }
    
}



mainCardsPrint();

 let btnVaccine: Element[] = [];

 let  changeColors = (id:any)=> {
  let search:any = animalsArray.find((x)=> x.id === id);
  let message = (document.getElementById(id)as HTMLElement);
    
  if (search.vaccine === "<i class='bi bi-clipboard2-x'></i>") {
      message.innerHTML=`Vaccine: <i class='bi bi-award'></i>`;
      search.vaccine = "<i class='bi bi-award'></i>";
      message.style.backgroundColor = "green";
      
  } else  {
      message.innerHTML=`Vaccine: <i class='bi bi-clipboard2-x'></i>`;
      search.vaccine = "<i class='bi bi-clipboard2-x'></i>";
      message.style.backgroundColor = "red";
  }
}
 
let vaccine = (id:any)=> {
    
    let search:any = animalsArray.find((x)=> x.id === id);
    console.log(search);
    
    changeColors(id);
     //mainCardsPrint();
    
    
    }

      

    let sort = (document.getElementById("sort")as HTMLElement);
    sort.addEventListener("click", function(){
      animalsArray.sort(function(a:any, b:any){
      
      return parseFloat(a.age) - parseFloat(b.age);
    });
    main.innerHTML= "";
    
    
    mainCardsPrint();
  
   });    

   let sort2 = (document.getElementById("sort2")as HTMLElement);
    sort2.addEventListener("click", function(){
    animalsArray.sort(function(a:any, b:any){
     
      return parseFloat(b.age) - parseFloat(a.age);
    });
    main.innerHTML= "";
    
    
    mainCardsPrint();
  
   });    

   

    
