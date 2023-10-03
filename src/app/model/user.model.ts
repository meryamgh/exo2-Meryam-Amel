export class User {
  public "prenom": string;
  public "nom": string;
  public "age": number | null;
  public "email": string;
  public "commentaire": string;

  public deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}
