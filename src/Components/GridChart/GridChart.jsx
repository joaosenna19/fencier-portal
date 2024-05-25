// GridChart.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './GridChart.module.scss'; // Importando o arquivo CSS

const GridChart = () => {
  return (
    <table className={styles.gridTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Image</th>
          <th>Type</th>
          <th>Price $</th>
          <th>Action</th> {/* Nova coluna para a ação de exclusão */}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Golden Fence</td>
          <td>N/A</td>
          <td>Fence</td>
          <td>54</td>
          <td>
            <button className={styles.deleteButton}>
              <FontAwesomeIcon icon={faTrash} className={styles.trashIcon} />
            </button>
          </td>
        </tr>
        <tr>
          <td>Silver Gate</td>
          <td>N/A</td>
          <td>Gate</td>
          <td>140</td>
          <td>
            <button className={styles.deleteButton}>
              <FontAwesomeIcon icon={faTrash} className={styles.trashIcon} />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default GridChart;
