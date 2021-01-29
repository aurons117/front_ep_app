
import Link from 'next/link';
import { useRouter } from 'next/router';
// import styles from '../styles/components.module.css';

export default function Navbar() {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <div className={styles.nav}>
            <Link href='/'>
                <img src="/logo.png" alt="Logo Siemens" />
            </Link>
            <span onClick={handleBack}>
                Regresar
            </span>
        </div>
    );
}
