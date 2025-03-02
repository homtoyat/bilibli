import { NavBar } from "@/modules/home/ui/components/nav-bar";

export default function page() {
  return (
    <div className="mx-auto h-lvh max-w-[2560px]">
      <main className="w-full">
        <NavBar></NavBar>

        <div className="top-120">
          <label>dddd</label>
          <input
            type="text"
            className="rounded-2xl bg-white outline-0 focus:outline-2 focus:outline-lime-500"
          ></input>
        </div>
      </main>

      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6"></footer>
    </div>
  );
}
