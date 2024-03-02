import { Suspense } from "react";
import { GithubUser } from "./components/GithubUser"
import { DialogProvider } from "./contexts/DialogContext";

export default async function Home() {
  return (
    <DialogProvider>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="nickcarva" />
      </Suspense>
      <Suspense fallback={<p>Carregando...</p>}>
        <GithubUser username="diego3g" />
      </Suspense>
    </DialogProvider>
  );
}
