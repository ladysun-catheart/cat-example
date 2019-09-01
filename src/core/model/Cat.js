const CatSexPrivate = Object.freeze({
  MALE: {
    name: 'male',
    icon: '♂'
  },
  FEMALE: {
    name: 'female',
    icon: '♀'
  },
  UNDEFINED: {
    name: 'unkwon',
    icon: '⚲'
  }
});

const CatSex = Object.freeze({
  male: CatSexPrivate.MALE,
  female: CatSexPrivate.FEMALE,
  unkwon: CatSexPrivate.UNDEFINED
});

class Cat {
  constructor({id, name, sex = CatSex.unkwon, birthday, breed, description}) {
    this.id = id;
    this.name = name;
    this.sex = sex;
    this.birthday = birthday;
    this.breed = breed;
    this.description = description;
  }
}

export default Cat;
export { CatSex }