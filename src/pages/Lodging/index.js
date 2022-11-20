import { useParams } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import Lodgings  from '../../logement.json'

function Lodging() {

   const { fichelogement } = useParams();
   const lodgingInfo = Lodgings.find(lodging => lodging.id === fichelogement);

    return (
      <div className="lodging">
         <div>
               <Carrousel slidesImg={lodgingInfo.pictures}/>
         </div>
      </div>
    );
}


export default Lodging