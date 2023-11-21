import {DivLinks, Links} from  './style'


export function Menu(){
   return(
       <DivLinks>
           <Links href="#">
               Destinos
           </Links>

           <Links  href="#">
               Ofertas
           </Links>

           <Links href='#'>
               Contato
           </Links>
       </DivLinks>
   )
}
