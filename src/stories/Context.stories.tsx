import { storiesOf } from "@storybook/react";
import { useEffect, useState } from "react";
import { FirestoreProvider, useFirestore } from "../contexts/FirestoreContext";
import { config } from "./config";

const stories = storiesOf("Context", module);

stories.add("Context", () => {
  const { getById } = useFirestore();
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const data = await getById("Blog Post", { id: "7U56vgnR9fONZc8hE80p" });
      // @ts-ignore
      setData(data);
      // console.log(data.data());
    })();
  }, []);

  return (
    <FirestoreProvider config={config}>
      {JSON.stringify(data) || "hello"}
    </FirestoreProvider>
  );
});
