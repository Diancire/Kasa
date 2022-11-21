import { useParams } from 'react-router-dom'
import Carrousel from '../../components/Carrousel'
import Collapse from '../../components/Collapse'
import LodgingInfo from '../../components/LodgingInfo'
import Lodgings  from '../../logement.json'
import '../../styles/Lodging.css'

function Lodging() {

   const { fichelogement } = useParams();
   const lodgingInfo = Lodgings.find(lodging => lodging.id === fichelogement);

   return (
      <div>
         <Carrousel slidesImg={lodgingInfo.pictures}/>
         <LodgingInfo description={lodgingInfo}/>
         <div className='lodging_collapse'>
            <div className='lodging_collapse_element'>
               <Collapse title={"Description"} texte={lodgingInfo.description}/>
            </div>
            <div className='lodging_collapse_element'>
               <Collapse title={"Equipements"} texte={lodgingInfo.equipments.map((Equipement_txt) => (
                  <li className='lodging_equipement' key={Equipement_txt}>{Equipement_txt}</li>
               ))} />
            </div>
         </div>
      </div>
    );
}


export default Lodging