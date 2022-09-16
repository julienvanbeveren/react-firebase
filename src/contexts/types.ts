export interface FirestoreConfig {
  project: FirebaseConfig,
  paths?: FirestorePath[]
}

export interface FirebaseConfig {
  apiKey: string,
  authDomain: string,
  projectId: string,
  storageBucket?: string,
  messagingSenderId?: string,
  appId: string,
  measurementId?: string
}

interface FirestorePath {
  name: [string, string],
  collectionPath: string
}