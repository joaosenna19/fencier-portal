// Products.js

import Heading from 'src/UI/Heading/Heading';
import Link from 'next/link';
import GridChart from 'src/Components/GridChart/GridChart.jsx';
import styles from './products.module.scss';

const Products = () => {
    return (
        <section>
            <Heading title='Products' subtitle='These are your current products' />
            <div className={styles.centerLink}>
                <div className='btn btn-primary'>
                    <Link href='products/add'>
                        New Product
                    </Link>
                </div>
            </div>
            <GridChart />
        </section>
    );
}

export default Products;
