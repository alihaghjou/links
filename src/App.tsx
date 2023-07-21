import Link from "./Link";

function App() {
  return (
      <div className="flex flex-col gap-8 justify-center items-center h-full">
        <img src="/public/icon.png" alt="avatar" className="rounded-full w-16" />
        <section className="flex flex-col gap-4">
          <Link name="Github" url="https://github.com/alihaghjou" />
          <Link name="Instagram" url="https://instagram.com" />
          <Link name="Linkdin" url="https://linkdin.com" />
        </section>
        <footer className="content-start">Designed</footer>
      </div>
  );
}

export default App;
