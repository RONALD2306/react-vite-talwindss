import { ChevronRightIcon } from '@heroicons/react/24/solid'
import { ShoppingBagIcon } from '@heroicons/react/24/solid'
import { CalendarDaysIcon } from '@heroicons/react/24/solid'

const OrdersCard = (props) => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(); // Obtener la fecha actual en formato de cadena (por ejemplo, "09/03/2024")
    
    // eslint-disable-next-line react/prop-types
    const { totalPrice, totalProducts } = props;
    return (
      <div className="flex justify-between items-center border border-black p-4 w-80 rounded-lg mb-4">
        <div className="flex justify-between w-full">
          <p className="flex flex-col gap-3">
            <span className="font-light flex items-center"><CalendarDaysIcon className="h-6 w-6 text-black/100 mr-2" />{formattedDate}</span>
            <span className="font-light flex items-center "><ShoppingBagIcon className="h-6 w-6 text-black/100 mr-2" />{totalProducts} Articulos</span>
          </p>
          <p className="flex items-center gap-2">
            <span className="font-medium text-2xl">${totalPrice}</span>
            <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer" />
          </p>
        </div>
      </div>
    );
  };

export default OrdersCard