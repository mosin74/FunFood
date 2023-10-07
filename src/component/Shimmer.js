const Shimmer = () => {

     return (<>
          <h2 className="Shimmer-Heading"></h2>
          <div data-testid="Shimmer" className="ShimmerMain">
               {Array(12)
                    .fill("")
                    .map((e, index) => (
                         <div className="Shimmer">
                              <img></img>
                              <h3></h3>
                              <h4></h4>
                              <h5></h5>
                         </div>
                    ))
               }

          </div >
     </>
     )

}

export default Shimmer;