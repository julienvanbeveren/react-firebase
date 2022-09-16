import { FirestoreConfig } from "../contexts/types";

export const config: FirestoreConfig = {
  project: {
    apiKey: "AIzaSyCOH3B2LuDOPWIbrB4_lxMH6I2gHaXNqZs",
    authDomain: "sdk-blog-c610e.firebaseapp.com",
    projectId: "sdk-blog-c610e",
    storageBucket: "sdk-blog-c610e.appspot.com",
    messagingSenderId: "865823593794",
    appId: "1:865823593794:web:fee6a52cae6b58f4a224db",
    measurementId: "G-58YH740FHQ"
  },
  paths: [
    {
      name: ["Blog Posts", "Blog Post"],
      collectionPath: "/blogposts"
    } 
  ]
}