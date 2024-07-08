


export default function Modal({id,header,body,footer}){
    return <div id={id || 'Modal'} className="Modal">
        <div className="content"  style={{background:"black", color:"red"}} >
            <div className="header">
                <h2>{header ? header : 'Header'}</h2>
            </div>
            <div className="body">
            {body ? body : (<div>
                <p>This is Modal Body</p>
            </div>
            )}
            </div>
            <div className="footer">
                {footer? footer:(<div>
                    <p>This is Footer</p>
                </div>)}
            </div>
        </div>


    </div>
}