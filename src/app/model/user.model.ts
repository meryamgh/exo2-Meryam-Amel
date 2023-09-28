export class User {
 "nom": string;
 "prenom" : string;
 "age" : bigint;
 "email" : string;
 "commentaire" : string;

 public deserialize(input : any) {
  Object.assign(this, input);
  return this;
 }
}
