import React from 'react'

export default function
    () {
    return (
        <div>
            <div><div id="carouselExampleFade" className="carousel slide
carousel-fade" data-bs-ride="carousel" style={{ objectFit: "center !important" }}>
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-caption" style={{ zIndex: 10 }}>

                        <div className="d-flex justify-content-ccenter">
                            <input className="form-control me-2" type="search"
                                placeholder="Search" aria-label="Search"
                            />
                            <button className="btn btn-outline-success text-white" type="submit">
                                Search </button>
                        </div>

                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900×900?burger"
                            className="d-block w-100" alt="..." style={{
                                filter: "brightness(60%)"
                            }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×900?pizza"
                            className="d-block w-100" alt="..." style={{
                                filter: "brightness(60%)"
                            }} />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900×900?momos"
                            className="d-block w-100" alt="..." style={{
                                filter: "brightness(0%)"
                            }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button"
                    data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button"
                    data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <div />
            </div>

           </div>
       </div>
    )
}
