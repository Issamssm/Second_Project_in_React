function Main(props) {
    console.log(props)
    return (
        <section className='SectionMain'>
            
            <div className="Card">
                <div className="Divimg">
                    <img src={`../images/${props.img}`} alt="" />
                </div>
                <div className="Divcontent">
                    <div className="Content1">
                        <p><span><img src="../images/Fill 219.png" alt="" /> {props.location}</span><a className="linkMap" href={props.GML}>View on Google Maps</a></p>
                        <h1>{props.title}</h1>
                    </div>
                    <div className="Content2">
                        <span>{props.Start_date} - {props.End_date}</span>
                        <p>
                            {props.description}
                        </p>
                    </div>
                    
                </div>
                
            </div>

        </section>
    );
}

export default Main;