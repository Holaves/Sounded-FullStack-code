import React from 'react';
import stylesContainer from '../styles/Containers.module.scss'

interface ContainerAProps {
    children: React.ReactNode;
    styles?: React.CSSProperties;
}

const ContainerA: React.FC<ContainerAProps> = ({children, styles}) => {
   return(
        <div style={{...styles}} className={stylesContainer.ContainerA}>
            {children}
        </div>
   );
};


export default ContainerA;