import React, { useContext } from "react";
import { FirestoreConfig } from "./types";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDoc,
  doc,
  DocumentSnapshot,
  DocumentData,
} from "firebase/firestore";

const FirestoreContext = React.createContext<useFirestoreProps>({
  getById: () => new Promise(() => {}),
});

interface useFirestoreProps {
  getById: (
    name: string,
    { id }: { id: string }
  ) => Promise<DocumentSnapshot<DocumentData>>;
}

interface FirestoreProviderProps {
  children?: React.ReactNode;
  config: FirestoreConfig;
}

export function useFirestore() {
  return useContext(FirestoreContext);
}

export function FirestoreProvider({
  children,
  config,
}: FirestoreProviderProps) {
  const app = initializeApp(config.project);
  const db = getFirestore(app);

  async function getById(name: string, { id }: { id: string }) {
    const collectionRoot = config.paths?.find(
      (el) => el.name[1] == name
    )?.collectionPath;
    if (!collectionRoot) {
      throw new Error("No valid name was given");
    }
    const document = await getDoc(doc(db, `${collectionRoot}/${id}`));
    return document;
  }

  const value: useFirestoreProps = {
    getById,
  };
  return (
    <FirestoreContext.Provider value={value}>
      {children}
    </FirestoreContext.Provider>
  );
}
