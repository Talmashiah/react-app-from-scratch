import BoxWrapper from '../../components/BoxWrapper/BoxWrapper';
import Box from '../../components/Box/Box';

export default ({className}) => {
    return <BoxWrapper {...{className}}>
        <Box {...{
            whileHover: {
                scale: 1.1
            },
            whileTap: {
                scale: 0.9
            },
            drag: true,
            dragConstraints: {
                left: 0,
                right: 500,
                bottom: 400,
                top: -200
            }
        }}/>
    </BoxWrapper>;
};