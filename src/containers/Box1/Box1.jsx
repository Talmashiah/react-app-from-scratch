import {motion} from 'framer-motion/dist/framer-motion'

import styled from 'styled-components';
import * as styles from './styles';
import {useState} from 'react';

export default styled(({className}) => {
    const [isAnimating, setIsAnimating] = useState(false);

    return <div {...{className}}>
        <motion.div {...{
            className: 'box',
            onClick: () => setIsAnimating(prev => !prev),
            initial: {
                backgroundColor: 'green',
                opacity: 0.5,
                x: 500
            },
            animate: {
                opacity: isAnimating ? 1: 0.5,
                x: isAnimating ? 1000 : 0,
                y: isAnimating ? 200 : 0,
                rotate: isAnimating ? 720 : 0,
                scale: isAnimating ? 2 : 1,
                backgroundColor: isAnimating ? 'red' : 'green',
            },
            transition: {
                type: 'spring',
                damping: 10,
                stiffness: 120,
                mass: 0.9
            }
        }}/>
    </div>;
})`${styles.Box1}`;