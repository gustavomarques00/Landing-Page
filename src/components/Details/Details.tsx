import { Card } from '../Card/Card'
import  Padlock from "../../assets/Image_1.png"
import  Graphic from "../../assets/Image_2.png"
import  Trophy from "../../assets/Image_3.png"
import styles from './Details.module.css'

export function Details(){
    return(
        <div className={styles.mainWrapper}>
            <Card source={Padlock} name="24/7 Support"  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
            <Card source={Graphic} name="1000+ of reviews"  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
            <Card source={Trophy} name="And More!"  description='Lorem ipsum dolor sit amet, consectetur adipiscing elit'/>
        </div>
    )
}