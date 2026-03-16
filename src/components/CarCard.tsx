import { createUseStyles } from "react-jss";
import { theme } from "../styles/theme";
import type { Car } from "../data/cars";

const useStyles = createUseStyles({
    card: {
        background: theme.colors.white,
        borderRadius: 12,
        overflow: "hidden",
        width: 300,
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        transition: "transform 0.3s",
        "&:hover": { transform: "translateY(-5px)" }
    },
    image: { width: "100%", height: 180, objectFit: "cover" },
    body: { padding: 18 },
    title: { fontSize: 20, fontWeight: 700 },
    info: { fontSize: 14, margin: "6px 0" },
    buttons: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: 10,
        "& button": {
            padding: "8px 12px",
            borderRadius: 6,
            border: "none",
            cursor: "pointer",
            fontWeight: 600
        }
    },
    buy: {
        background: theme.colors.accent,
        color: theme.colors.primary
    },
    compare: {
        background: theme.colors.secondary,
        color: theme.colors.white
    }
});

interface Props { car: Car; onCompare: (id: string) => void; }

export default function CarCard({ car, onCompare }: Props) {
    const classes = useStyles();
    return (
        <div className={classes.card}>
            <img src={car.image} className={classes.image} />
            <div className={classes.body}>
                <div className={classes.title}>{car.name}</div>
                <div className={classes.info}>{car.range} range</div>
                <div className={classes.info}>{car.battery} battery</div>
                <div className={classes.info}>Price: {car.price}</div>

                <div className={classes.buttons}>
                    <button className={classes.buy}>Buy</button>
                    <button className={classes.compare} onClick={() => onCompare(car.id)}>
                        Compare
                    </button>
                </div>
            </div>
        </div>
    );
}