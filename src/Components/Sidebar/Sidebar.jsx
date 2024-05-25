import styles from './Sidebar.module.scss';
import Image from 'next/image';
import {
  MdOutlineDashboardCustomize,
  MdOutlineShoppingBag,
  MdAttachMoney,
  MdInsertChartOutlined,
  MdOutlineSettings,
} from 'react-icons/md';
import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { name: 'panel', icon: <MdOutlineDashboardCustomize />, url: '/' },
  { name: 'products', icon: <MdOutlineShoppingBag />, url: '/products' },
  { name: 'leads', icon: <MdInsertChartOutlined />, url: '/relatorio' },
  { name: 'settings', icon: <MdOutlineSettings />, url: '/configuracoes' },
];

const Sidebar = () => {
  const router = useRouter();

  let { route } = router;
  if (route === '/newlead') route = '/';
  if (route === '/products/add') route = '/products';

  const renderLinks = links.map((link, i) => (
    <li key={i}>
      <Link href={link.url} className={route === link.url ? styles.active : ''}>
        <div>{link.icon}</div>
        <span>{link.name}</span>
      </Link>
    </li>
  ));

  return (
    <section className={styles.sidebar}>
      <div className={styles.image}>
        <Image src='/logo.png' alt='dashboard' width='46' height='43' />
      </div>
      <nav className={styles.navigation}>
        <ul>{renderLinks}</ul>
      </nav>
    </section>
  );
};

export default Sidebar;