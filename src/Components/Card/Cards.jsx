import { useSelector } from 'react-redux';
// import useFormatPrice from 'src/hooks/useFormatPrice';
import Card from './Card';
import styles from './Cards.module.scss';

const Cards = () => {
//   const { today: todayOrders } = useSelector((state) => state.dashboard.orders);
//   const { today, total } = useSelector((state) => state.dashboard.sales);

//   const todaySales = useFormatPrice(today);
//   const totalSales = useFormatPrice(total);
//   const count = todayOrders?.length || 0;

  return (
    <div className={styles.cards}>
      <Card title='Quotes' subtitle="Today's quotes" value='20' />
      <Card title='Leads' subtitle="Today's leads" value='25' />
    </div>
  );
};

export default Cards;