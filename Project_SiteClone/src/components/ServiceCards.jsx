function ServiceCards({Content}) {
    return (
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
                <div className="p-4">
                <i className={Content.iconclass}></i>
                <h5>{Content.title}</h5>
                <p>{Content.Desc}</p>
                </div>
            </div>
        </div>
    );
}

export default ServiceCards;