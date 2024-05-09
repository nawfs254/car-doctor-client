import { FaArrowRight } from 'react-icons/fa';

const ServiceCard = ({service}) => {

    const{img, title, price} = service

    return (
        <div>
            <div className='border rounded-lg p-6 flex flex-col justify-between m-2'>
                <img src={img} alt="" className='rounded-lg space-y-4 mb-5' />
                <h4 className='font-bold text-2xl'>{title}</h4>
                <div className="flex justify-between items-center">
                    <p className="text-orange font-semibold text-xl">Price: ${price}</p>
                    <button className="btn bg-transparent border-transparent hover:border-orange"><FaArrowRight color='FF3811'/></button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;