import SomeAsyncComponent from "./components/SomeAsyncComponent";
import { state } from "./state";
import { JSDOM } from "jsdom";

export default async function Home() {
  state.title = await fetch("https://www.jackherrington.com/")
    .then(async (res) => {
      const html = await res.text();
      return new JSDOM(html).window.document.title;
    })
    .catch(() => "");
  return (
    <main>
      {/*@ts-expect-error Server Component */}
      <SomeAsyncComponent message="Hello world!" />
    </main>
  );
}
