const Shimmer = () => {

     return (

          <div data-testid="Shimmer">
               {Array(10)
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
     )

}

export default Shimmer;