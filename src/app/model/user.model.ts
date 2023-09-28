import {Deserializable} from "./deserializable.model";

export class User implements Deserializable {
  'prenom' : string;
  'nom' : number;
  'age' : bigint;
  'email' : string;
  'commentaire' : string;


  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
