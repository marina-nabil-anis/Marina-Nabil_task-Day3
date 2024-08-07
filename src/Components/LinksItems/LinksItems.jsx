import './LinksItems.css'

function LinksItems (props){
    return(
        <button className='MyBtns'>
            <span>{props.LinkName}</span>
        </button>
    )
}

export default LinksItems