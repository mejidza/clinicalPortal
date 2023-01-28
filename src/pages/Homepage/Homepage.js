import HomeIcon from '@mui/icons-material/Home';
import styles from './Homepage.module.css'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const Homepage = () => {
    return(
        <div className={styles.navContainer}>
            <nav className="navPanel">
                <div className="homeButton">
                <HomeIcon/>
                <p className="homeSubtext">Главная</p>
                </div>
                <div className="patientButton">
                    
                    <p className="patientSubtext">Пациенты</p>
                </div>
            </nav>
        </div>
    )
}