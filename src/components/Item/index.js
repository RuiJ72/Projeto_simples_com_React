const Item = ({children}) => {
    return(
        <a href="/" className="list-group-item list-group-item-action list-group-item-info">
            {children}
        </a>
        
    )
}

export default Item;


//As props ou props.children são as propriedades que serão utilizaddas no componente