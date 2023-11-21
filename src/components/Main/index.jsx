import img1 from '../../imgs/img1.jpg'
import { Principal, DivImagem, Imagem, Titulo, SpanTitulo, Pmain} from "./style"



export function Main(){
   return(
       <Principal>
           <DivImagem>
               <Imagem src={img1} alt="imagem do globo e uma pessoa" />
           </DivImagem>
          
           <Titulo>O seu próximo <SpanTitulo>destino</SpanTitulo> pode estar aqui...</Titulo>
           <Pmain>
               Aqui você encontra uma seleção de <strong>pacotes completos</strong>
               para as suas férias!
            <Pmain />
            <Pmain />
               Na <strong>ConnectFlight</strong> você encontra pacotes de viagens nacionais e internacionais
               que incluem: passagens aéreas, hotéis, café da manhã, e até seguro
               viagem com <strong>preços arrasadores!</strong>
            <Pmain />
            <Pmain />
               Se você ainda não tem um destino definido, confira nossa seção de ofertas.
           </Pmain>
       </Principal>
   )
}
