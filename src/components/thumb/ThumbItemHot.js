export function ThumbItemHot(props) {
   
    const {cls,item} = props
    return (
        <div className={cls}>
            <div className="thumb"><img src={item.img} alt={item.img} /></div>
            <div className="content">
                <h3 className="title green">{item.title}</h3>
                <p>{item.description}</p>
            </div>
        </div>
    )
}