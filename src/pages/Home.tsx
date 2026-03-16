import { useState } from "react";
import { createUseStyles } from "react-jss";
import CarCard from "../components/CarCard";
import CompareBar from "../components/CompareBar";
import { cars } from "../data/cars";
import { theme } from "../styles/theme";

const useStyles = createUseStyles({
  section: { padding: "60px 20px", fontFamily: theme.font },
  hero: {
    textAlign: "center", marginBottom: 40,
    "& h1": { fontSize: 36 }
  },
  grid: { display: "flex", flexWrap: "wrap", gap: 24, justifyContent: "center" }
});

export default function Home() {
  const classes = useStyles();
  const [compareList, setCompareList] = useState<string[]>([]);

  const handleCompare = (id: string) => {
    setCompareList((prev) => prev.includes(id) ? prev : [...prev, id]);
  };
  const clearCompare = () => setCompareList([]);

  return (
    <section className={classes.section} id="cars">
      <div className={classes.hero}>
        <h1>Our Electric Vehicles</h1>
        <p>Select vehicles and compare.</p>
      </div>

      {compareList.length > 0 && (
        <CompareBar selected={compareList} clear={clearCompare} />
      )}

      <div className={classes.grid}>
        {cars.map((c) => (
          <CarCard key={c.id} car={c} onCompare={handleCompare} />
        ))}
      </div>
    </section>
  );
}