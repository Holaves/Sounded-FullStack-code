import React from 'react';
import styles from '../styles/ContainerB.module.scss'

interface ContainerBProps {
    children: React.ReactNode;
}

const ContainerB: React.FC<ContainerBProps> = ({children}) => {
   return(
       <div className={styles.ContainerB}>
            {children}
       </div>
   );
};


export default ContainerB;