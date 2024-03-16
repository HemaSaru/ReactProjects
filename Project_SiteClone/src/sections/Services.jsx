
import ServiceCards from "../components/ServiceCards";

const CardsContent1= {
    iconclass : "fa fa-3x fa-user-tie text-primary mb-4",
    title: "Master Chefs",
    Desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
}
const CardsContent2= {
    iconclass : "fa fa-3x fa-utensils text-primary mb-4",
    title: "Quality Food",
    Desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
}
const CardsContent3= {
    iconclass : "fa fa-3x fa-cart-plus text-primary mb-4",
    title: "Online Order",
    Desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
}
const CardsContent4= {
    iconclass : "fa fa-3x fa-headset text-primary mb-4",
    title: "24/7 Service",
    Desc: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
}
function Servies() {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-4">
                    <ServiceCards Content={CardsContent1} />
                    <ServiceCards Content={CardsContent2} />
                    <ServiceCards Content={CardsContent3} />
                    <ServiceCards Content={CardsContent4} />
                </div>
            </div>
        </div>
    );
}


export default Servies;