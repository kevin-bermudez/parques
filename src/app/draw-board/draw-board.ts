import {config} from '../../config';
import '../../scss/_board.scss';

interface IDrawOptions {
  width?:string;
  height?:string;
}

export const drawBoard = ({
  width='500px',
  height='500px'
}:IDrawOptions):void => {
  document.querySelector(config.mainTarget).innerHTML='aaaa';
};