import './PersonalDetails.css'
import MyIMG from '../../assets/avatar-jessica.jpeg'

function PersonalDetails(){
    return(
     <div id='info'>
<img id='MyIMG' src={MyIMG}/>
<h2> Jessica Randall</h2>
         <label id='Place'>London, United Kingdom</label>
         <p>"Front-end developer and avid reader."</p>
</div>

    )
}

export default PersonalDetails