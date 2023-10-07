const OffShimmer = () => {

    return (
        <>
            <h2 className="Shimmer-Heading"></h2>

            <div>
                <div className="ShimmerOff">


                    {Array(3)
                        .fill("")
                        .map((e, index) => (
                            <div className="Shimmer-offer">
                                <img></img>
                                <h3></h3>
                                <h4></h4>
                                <h5></h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default OffShimmer;