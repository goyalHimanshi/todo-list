import Item from "./Item";

const Checkfood = ({ items }) => {

    return (
        <ul className='list-group'>

            {items.map(item =>

                <Item food={item}></Item>)
            }

        </ul>
    )

}
export default Checkfood;