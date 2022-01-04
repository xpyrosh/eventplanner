import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; GTA Events 2022</p>
            <p>
                <Link href="/about">More About GTA Events...</Link>
            </p>
        </footer>
    );
}
