import styled from 'styled-components';
import * as styles from './styles'

import {motion} from 'framer-motion/dist/framer-motion';

export default styled((props) => {
    return <motion.div {...props}/>
})`${styles.Box}`