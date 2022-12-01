import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href="/">Lifts</Link> | <Link href="/recommended-programs">Recommended Programs</Link>
        </nav>
    )
}