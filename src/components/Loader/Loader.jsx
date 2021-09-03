import Loader from 'react-loader-spinner';
import s from './Loader.module.css';

export default function Spinner() {
  return (
    <div className={s.loader}>
      <Loader
        type="Puff"
        color="#8c9294"
        height={60}
        width={60}
        timeout={999999999}
        radius={500}
      />
    </div>
  );
}
