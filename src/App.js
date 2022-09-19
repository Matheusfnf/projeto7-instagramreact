import NavBar from "./components/Navbar";
import Corpo from "./components/Corpo";
import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";
import Stories from "./components/Stories";
import Sugestoes from "./components/Sugestoes";
import Usuario from "./components/Usuario";
import Tudo from "./components/Tudo";

export default function App() {
  return (
    <>
      <NavBar />
      <div className="website">
        <section class="web-section">
          <div>
            <Stories />
            <Posts />
          </div>
          <Sidebar />
        </section>
      </div>
    </>
  );
}
