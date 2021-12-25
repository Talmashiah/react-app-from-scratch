import {hot} from 'react-hot-loader/root';

import Box1 from './containers/Box1/Box1';
import Box2 from './containers/Box2/Box2';
import Box3 from './containers/Box3/Box3';
import Box4 from './containers/Box4/Box4';
import Box5 from './containers/Box5/Box5';
import Box6 from './containers/Box6/Box6';

export default hot(() => {
    return <div className="App">
        <Box1/>
        <Box2/>
        <Box3/>
        <Box4/>
        <Box5/>
        <Box6/>
    </div>;
});