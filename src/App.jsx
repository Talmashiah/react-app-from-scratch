import {hot} from 'react-hot-loader/root';

import Box1 from './containers/Box1/Box1';
import Box2 from './containers/Box2/Box2';

export default hot(() => {
    return <div className="App">
        <Box1/>
        <Box2/>
    </div>;
});