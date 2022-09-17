import { useEffect, useState } from "react";
import { FirestoreProvider, useFirestore } from "../";
import { config } from "./config";

export default {
  title: "Context",
  component: FirestoreProvider,
};

export const App = () => {
  const [data, setData] = useState<any>({});
  const { getById } = useFirestore();

  useEffect(() => {
    (async () => {
      const doc = await getById("Blog Post", { id: "7U56vgnR9fONZc8hE80p" });
      setData(doc.data());
      console.log(doc);
    })();
  }, []);

  return <>{JSON.stringify(data)}</>;
};

export const final = () => {
  return (
    <FirestoreProvider config={config}>
      <App />
    </FirestoreProvider>
  );
};
