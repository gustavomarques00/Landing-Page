import styles from "./Card.module.css"

interface InfoCard {
    source: string;
    name: string;
    description: string;
}

export function Card({source,description,name}:InfoCard){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.imageWrapper}>
                <img src={source} />
            </div>
            <div className={styles.textWrapper}>
                <strong>{name}</strong>
                <p>{description}</p>
            </div>
        </div>
    )
}