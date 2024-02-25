import KinoList from "../components/KinoList";
import { useCollection } from "../hooks/useCollection";

function Home() {
  const { document: kino } = useCollection();
  return (
    <div>
      {kino && <KinoList kino={kino} />}
      {!kino && (
        <div className="flex flex-row gap-1 items-center">
          <h2 className="font-bold text-lg">Loading</h2>
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      )}
    </div>
  );
}

export default Home;
