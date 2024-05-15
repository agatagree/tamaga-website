import { collection } from "firebase/firestore";
import { db } from "./firebase";

export const collectionProjects = "projects";
export const projectStorage = "/projects";

export const projectsCollection = collection(db, collectionProjects);

export const urlStorage =
  "https://firebasestorage.googleapis.com/v0/b/devs-project-edf3a.appspot.com/o/images%2F";
export const urlStorageCD =
  "?alt=media&token=04d9d94b-f79a-434c-804d-7989ede403e1";