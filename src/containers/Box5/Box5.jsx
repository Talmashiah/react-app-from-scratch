import BoxWrapper from '../../components/BoxWrapper/BoxWrapper';
import Box from '../../components/Box/Box';
import Button from '../../components/Button/Button';

import styled from 'styled-components';
import * as styles from './styles';

import {useAnimation} from 'framer-motion/dist/framer-motion';

export default styled(({className}) => {

    const control = useAnimation();

    return <BoxWrapper {...{className}}>
        <div {...{className: 'buttons-panel'}}>
            <Button {...{
                children: 'Move Right', onClick: () => {
                    control.start({
                        x: 600,
                        transition: {
                            duration: 2
                        }
                    })
                }
            }}/>
            <Button {...{
                children: 'Move Left', onClick: () => {
                    control.start({
                        x: 0,
                        transition: {
                            duration: 1
                        }
                    })
                }
            }}/>
            <Button {...{
                children: 'Circle', onClick: () => {
                    control.start({
                        borderRadius: '50%',
                        transition: {
                            duration: 0.5
                        }
                    })
                }
            }}/>
            <Button {...{
                children: 'Square', onClick: () => {
                    control.start({
                        borderRadius: 0,
                        transition: {
                            duration: 0.5
                        }
                    })
                }
            }}/>
            <Button {...{
                children: 'STOP!', onClick: () => {
                    control.stop()
                }
            }}/>
        </div>
        <Box {...{animate: control}}/>
    </BoxWrapper>;
})`${styles.Box5}`;