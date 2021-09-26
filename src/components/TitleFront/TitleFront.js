import './TitleFront.scss'

import logo_white from '../../Assets/logo_white.png';

const TitleFont = () => {
    return (
        <div className="top_part" >

            <div className="top_part_h1">
                <h1 className="top_part_title">PEQUEÑO RESPIRO</h1>
            </div>
            <div className="top_part_img">

                <img src={logo_white} className="logo_white " alt="logo site" />
            </div>


        </div>

    )
}
export default TitleFont;