import styled from 'styled-components';
import * as styles from './styles'

export default styled((props) => {
    return <div {...props}/>
})`${styles.BoxWrapper}`