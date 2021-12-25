import BoxWrapper from '../../components/BoxWrapper/BoxWrapper';
import Box from '../../components/Box/Box';

import styled from 'styled-components';
import * as styles from './styles';

export default styled(({className}) => {
    const boxVariant = {
        hidden: {
            x: -1000
        },
        visible: {
            x: 0,
            transition: {
                staggerChildren: 0.5,
                delay: 1,
                when: 'beforeChildren'
            }
        }
    };

    const listVariant = {
        hidden: {
            x: -10,
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
        }
    };

    return <BoxWrapper {...{className}}>
        <Box {...{
            variants: boxVariant,
            initial: 'hidden',
            animate: 'visible',
            className: 'box'
        }}>
            {[1, 2, 3].map(id => <Box {...{
                className: 'item',
                size: 10,
                color: 'white',
                key: id,
                variants: listVariant
            }}/>)}
        </Box>
    </BoxWrapper>;
})`${styles.Box3}`;