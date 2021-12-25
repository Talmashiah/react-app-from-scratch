import BoxWrapper from '../../components/BoxWrapper/BoxWrapper';
import Box from '../../components/Box/Box';

export default ({className}) => {

    return <BoxWrapper {...{className}}>
        <Box {...{
            animate: {
                scale: [0.1, 1.4, 1, 0.9, 1],
                borderRadius: ['20%', '50%', '10%', '25%', '0%'],
                rotate: [0, 150, 0, 360, 0],
            },
            transition:{
                duration: 2
            }
        }}/>
    </BoxWrapper>;
};