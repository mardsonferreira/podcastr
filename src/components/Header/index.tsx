import format from 'date-fns/format';
import ptBr from 'date-fns/locale/pt-BR';

import styles from './styles.module.scss';

export default function Header () {
    const currentDate = format(new Date(), 'EEEEEE, d MMMM', {
        locale: ptBr,
    })
    return (
        <header className={styles.container}>
            <img src="/logo.svg" alt="podcastr" />
            <p>The best for you to hear, always.</p>
            <span>{currentDate}</span>
        </header>
    );
}