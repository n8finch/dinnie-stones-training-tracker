import Navbar from './navbar'
import styles from '../../styles/Home.module.css'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <Navbar/>
            <p>Powered by Grit and Foolishness 🤪<br/>Made with ❤️ by <a href="https://n8finch.com" target="_blank" rel="noopener noreferrer">Nate Finch</a></p>
        </footer>
    )
}