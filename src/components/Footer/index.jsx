import wave from '../../imgs/wave.png'
import { Menu } from '../Menu'
import { Rodape, Linha, ImgWave } from "./style"


export function Footer(){
   return(
       <Rodape>
           <Linha></Linha>
           <Menu/>
           <ImgWave id="wave" src={wave} alt="imagem de fundo do footer" />
       </Rodape>
   )
}
