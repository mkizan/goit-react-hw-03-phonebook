import React from 'react';
import styles from './Filter.module.scss';

const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        type="text"
        className={styles.input}
        value={value}
        onChange={onChange}
        placeholder="Find your contact"
        autoComplete="off"
      />
    </label>
  );
};

export default Filter;
