import {observable} from "mobx"
import Cat from "../models/cat"
import Dog from "../models/dog"
import Hedgehog from "../models/hedgehog"

class PetsStore {
  @observable list = [];

  addCat() {
    this.list.push(new Cat());
  }

  addDog() {
    this.list.push(new Dog());
  }

  addHedgehog() {
    this.list.push(new Hedgehog());
  }
}

const petsStore = new PetsStore();
export default petsStore
