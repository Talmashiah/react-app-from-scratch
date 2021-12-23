// import {motion} from 'framer-motion';

import styled from 'styled-components';
import * as styles from './styles';

export default styled(({className}) => <div {...{className}}> Hello, World! </div>)`${styles.Box1}`;