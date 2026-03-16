import { createUseStyles } from "react-jss";
import { theme } from "../styles/theme";

const useStyles = createUseStyles({
  bar: {
    background: theme.colors.accent,
    padding: "10px 30px",
    display: "flex",
    gap: 15,
    alignItems: "center",
    fontFamily: theme.font
  },
  item: { fontWeight: 700 },
  clear: {
    marginLeft: "auto",
    cursor: "pointer",
    color: theme.colors.primary
  }
});

interface Props { selected: string[]; clear: () => void; }

export default function CompareBar({ selected, clear }: Props) {
  const classes = useStyles();
  return (
    <div className={classes.bar}>
      {selected.map((id) => (
        <span key={id} className={classes.item}>{id}</span>
      ))}
      <span className={classes.clear} onClick={clear}>Clear ×</span>
    </div>
  );
}