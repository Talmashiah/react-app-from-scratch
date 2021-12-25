import BoxWrapper from '../../components/BoxWrapper/BoxWrapper';
import Box from '../../components/Box/Box';

import {useCycle} from 'framer-motion/dist/framer-motion';

export default () => {
    const [x, cycleX] = useCycle(0, 50)
    return <BoxWrapper>
        <Box {...{
            animate: {x},
            onTap: cycleX
        }}/>
    </BoxWrapper>;
};