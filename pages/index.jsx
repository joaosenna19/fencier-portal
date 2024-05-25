import Heading from "src/UI/Heading/Heading";
import styles from 'styles/Dashboard.module.scss'
import Link from 'next/link'
import Cards from 'src/Components/Card/Cards'
import SalesHistory from 'src/Components/SalesHistory/SalesHistory'
import SalesGoal from 'src/Components/SalesGoal/SalesGoal'


export default function Home(){
    return (
        <section className={styles.dashboard}>
            <Heading title="Hi {Bruno}" subtitle="Check how you are doing today"/>
            <Link href='/newlead' className='btn-primary'>
                New sale
            </Link>
            <section className={styles.columns}>
                <section className={styles.columns1}>
                    <Cards />
                    <SalesHistory/>
                </section>
                <section className={styles.column2}>
                    <SalesGoal/>
                </section>
            </section>
        </section>
    );
}