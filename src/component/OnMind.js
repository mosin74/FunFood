const Mind=({imageId ,text })=>{
    return(

        <>
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/"+imageId} alt="" />
        <h1>{text}</h1>
        </>
        )

}

export default Mind;