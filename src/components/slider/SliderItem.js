export function SliderItem(props) {
   const {item,cls} =props
    return (
        <div className={cls}>
            <img src={item.img} alt={item.name} />
        </div>
    )
}