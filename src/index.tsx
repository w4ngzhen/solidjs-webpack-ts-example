import {render} from 'solid-js/web';
import styles from './index.module.less';

function HelloWorld() {
    return (
        <div class={styles.hello}>
            <p>Hello World!</p>
        </div>
    );
}

render(() => <HelloWorld/>, document.querySelector('#app')!)