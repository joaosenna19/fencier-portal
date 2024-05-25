import { useEffect } from 'react';
import Cleave from 'cleave.js';
import 'cleave.js/dist/addons/cleave-phone.i18n';
import styles from './AddSale.module.scss'

const AddSale = () => {
    useEffect(() => {
        const postalCodeInput = document.getElementById('postal-code');
        if (postalCodeInput) {
            new Cleave(postalCodeInput, {
                delimiters: [' '],
                blocks: [3, 3],
                uppercase: true
            });
        } else {
            console.error('Postal code not found');
        }

        const phoneInput = document.getElementById('phone-number');
        if (phoneInput) {
            new Cleave(phoneInput, {
                phone: true,
                phoneRegionCode: 'BR'
            });
        } else {
            console.error('Number does not exists');
        }
    }, []);

    return (
        <form className={styles.form}>
            <div className={styles.formGroup}>
                <label htmlFor="client-name" className={styles.label}>
                    Cliente Name
                </label>
                <input
                    type="text"
                    name="client name"
                    id="client-name"
                    className={styles.input}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="phone-number" className={styles.label}>
                    Phone Number
                </label>
                <input
                    type="text"
                    name="phone number"
                    id="phone-number"
                    className={styles.input}
                    required
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className={styles.input}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="postal-code" className={styles.label}>
                    Postal Code
                </label>
                <input
                    type="text"
                    name="postal code"
                    id="postal-code"
                    pattern="[A-Za-z]\d[A-Za-z] \d[A-Za-z]\d"
                    title="Example A1A 1A1"
                    className={styles.input}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="quote" className={styles.label}>
                    Quote
                </label>
                <input
                    type="number"
                    name="quote"
                    id="quote"
                    className={styles.input}
                />
            </div>
            <button type="submit" className={`${styles.btn} ${styles.btnPrimary}`}>
                Confirm
            </button>
        </form>
    );
};

export default AddSale;
