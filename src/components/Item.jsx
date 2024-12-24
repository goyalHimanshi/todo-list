const Item = (props) => {
    return (

        <li key={props.food} className='list-group-item'>
            {props.food}</li>

    )
}
export default Item;


