import { useLoaderData } from "react-router-dom";
import ServiceCard from "../../Components/ServiceCard";


const Service = () => {
    const services = useLoaderData()

    return (
        <div className="mt-40">
            <div className="title text-center my-10 space-y-5 p-2">
                <h5 className="text-orange text-lg font-bold">Services</h5>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="w-full lg:w-3/5 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;