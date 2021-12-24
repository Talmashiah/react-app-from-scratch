import {motion} from 'framer-motion/dist/framer-motion'

import styled from 'styled-components';
import * as styles from './styles';

export default styled(({className}) => {
    return <div {...{className}}>
        <motion.div {...{
            className: 'box',
            whileHover: {
                scale: 1.1
            },
            whileTap: {
                scale: 0.1
            },
            drag: true,
            dragConstraints: {
                left: 0,
                right: 500,
                bottom: 400,
                top: -200
            }
        }}/>
    </div>;
})`${styles.Box2}`;