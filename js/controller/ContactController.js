import { Contact } from "../models/Contact.js";

let contacts = [];

//Fonction pour ajouter des contacts

function ajouterContact(nom, prenom, telephone) {
  let newContact = new Contact(nom, prenom, telephone);
  contacts.push(newContact);
}

ajouterContact("Parker", "Peter", "0613454567");
ajouterContact("Stark", "Tony", "0613454568");
ajouterContact("Kent", "Clark", "0613454560");

//Fonction pour afficher les contacts

function afficherContacts(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`Contact ${i + 1} :`);
    console.log("Nom : " + array[i].nom);
    console.log("Prénom : " + array[i].prenom);
    console.log("Téléphone : " + array[i].telephone);
    console.log("------------------------------");
  }
}

afficherContacts(contacts);
