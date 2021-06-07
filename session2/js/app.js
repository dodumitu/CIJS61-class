// viết chương trình quản lý thành viên gia đình
// dữ liệu: thành viên trong gia đình: tên tuổi, giới tính, vai vế, ăn uống, ngủ nghỉ, gải trí
// class Person {
//   name;
//   age;
//   sex;
//   role;
//   constructor(_name, _age, _sex, _role) {
//     this.name = _name;
//     this.age = _age;
//     this.sex = _sex;
//     this.role = _role;
//   }

//   eat() {
//     console.log("ăn ngon");
//   }
//   sleep() {
//     console.log("ngủ ngon");
//   }
//   play(game) {
//     console.log("chơi lớn " + game);
//   }
//   introduce() {
//     console.log(
//       `xin chào, tên tôi là ${this.name}
//     năm nay tôi ${this.age}
//     tôi là ${this.role} trong gia đình`
//     );
//   }
// }
// let father = new Person("dad", 100, "male", "father");
// father.play("call of duty");
// father.introduce();
// // cach cu father.name = "dad";
// // father.age = 100;
// // father.sex = "male";
// // father.role = "father";
// let mother = new Person("mom", 100, "female", "mother");
// // cach cu mother.name = "mom";
// // mother.age = 100;
// // mother.sex = "female";
// // mother.role = "mother";

// console.log(father);
// console.log(mother);
class Pet {
  species;
  color;
  venomous;
  food;
  constructor(_species, _color, _venomous, _food) {
    this.species = _species;
    this.color = _color;
    this.venomous = _venomous;
    this.food = _food;
  }
  introduce() {
    console.log(
      `hello i am ${this.species}
    i am  ${this.venomous}
    i am  ${this.color}
    i am ${this.food}`
    );
  }
}
let Dog = new Pet("corgy", "tri color", "not venomous", "carnivore");
Dog.introduce();
// class Boy extends Person{
// girlFriend;
// handsome;
// cook;
// work;
// constructor (name, age, role, girlFriend, handsome, cook, work){
//     super(name, age, "male", role)
//     this.girlFriend = girlFriend;
//     this.handsome= handsome;
//     this.cook= cook;
//     this.work= work;
// }
// }
// class Goodboy extends Boy {
//     good;
//     trusted;
//     constructor (name, age, role, girlFriend, handsome, cook, work){
//         super(name, age, role, girlFriend, handsome, cook, work)
//             this.good= good;
//             this.trusted= trusted
//         }
// }
// console.log(Goodboy);
// class Badboy extends Boy {
//     bad;
//     playboy;
//     constructor (name, age, role, girlFriend, handsome, cook, work){
//         super(name, age, role, girlFriend, handsome, cook, work)
//             this.bad= bad;
//             this.playboy= playboy
//         }
// }
// console.log(Badboy)
// class Girl extends Person{
//     beautiful;
//     boyFriend;
//     cook;
//     shopping;
//     constructor (name, age, role, boyFriend, beautiful, cook, shopping){
//         super(name, age, "female", role)
//         this.boyFriend = boyFriend;
//         this.beautiful= beautiful;
//         this.cook= cook;
//         this.work= shopping;
//     }
// }

class Person {
    name;
    age;
    favorite;
    constructor (name,age,favorite){
        this.name= name;
        this.age=age;
        this.favorite= favorite
    }

}
class Boy extends Person {
    handsome;
    girlFriend;
    constructor(name, age, favorite, handsome, girlFriend) {
        super(name,age,favorite);
        this.handsome;
        this.girlFriend;
    }
    cook (){ }
    work (){ }

}
class Girl extends Person{
    beautiful;
    boyFriend;
    constructor(name, age, favorite, beautiful, boyFriend) {
        super(name,age,favorite);
        this.beautiful;
        this.boyFriend;
    }
    cook (){ }
    shopping (){ }
}
class Goodboy extends Boy {
    constructor(name, age, favorite, handsome, girlFriend, good){
        super(name, age, favorite, handsome, girlFriend);
        this.good= good
    }
}
class Badboy extends Boy {
    constructor(name, age, favorite, handsome, girlFriend, bad){
        super(name, age, favorite, handsome, girlFriend);
        this.bad= bad
    }
    racing(speed) { }
}

let bb1 = new Badboy ("bad boy1", 20, ["đi chơi ko e"], 10, null, 11)
console.log(bb1);
class Human {
    firstName;
    lastName;
    age;

    constructor(firstName, lastName, age) {
        this.firstName= firstName;
        this.lastName = lastName;
        this.age = age;
    }
  /*getter, khong di duoc voi async*/  get Fullname() {
        return this.firstName+ ' '+ this.lastName    }
        set Age(age) {
            if (age>0 && age<100) {
                this.age= age
            }
            else{
                console.log('dieu');
            }
        }
}
let hooman = new Human ("Bruce", "Wayne", 25)
console.log(hooman.Fullname);
hooman.age= 18
console.log(hooman.age);