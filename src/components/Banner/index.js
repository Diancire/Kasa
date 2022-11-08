import banner from '../../assets/banner.png'
import '../../styles/Banner.css'

function Banner () { 
    return (
        <div className='banner'>
            <img src={banner} alt="banner" className="banner_image" />
            <p className="banner_text">Chez vous, partout et ailleurs</p> 
        </div>
    )
}

export default Banner