function Emptyfood({ items }) {
    return (
        <>
            {items.length === 0 && <h1>i am hungry</h1>}
        </>

    )

}
export default Emptyfood;