import CardCharacter from "../assets/images/card-character.png";
import { cardItems } from "./Data";

const Card = () => {
  return (
    <selection className="flex my-[40px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-10 pt-[16px]">
        {cardItems.map((item) => (
          <div className="card">
            <div className="bg-primary px-8 pt-4 rounded-t-[20px] flex flex-row items-center">
              <img
                src={CardCharacter}
                alt="Icon"
                className="w-[90px] h-[150px]"
              />
              <div className="flex flex-col ml-3 p-3 justify-center">
                <h4 className="card-program mb-3">{item.program}</h4>
                <p className="card-title mb-1">{item.title}</p>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
            <div className="bg-white px-8 pb-6 rounded-b-[20px] flex flex-col">
              <p className="card-content mt-4 mb-0">{item.title}</p>
              <p className="card-sub-content mb-3">{item.description}</p>
              <div className="flex flex-row items-center">
                <p className="card-sub-item flex-initial w-12">Batch</p>
                <p className="card-item">{item.batch}</p>
              </div>
              <div className="flex flex-row items-center">
                <p className="card-sub-item flex-initial w-12">Mentor</p>
                <p className="card-item">{item.mentor}</p>
              </div>
              <div className="flex justify-end mt-4">
                <p className="card-price-real mr-2">{item.pricereal}</p>
                <p className="card-price pt-2">{item.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </selection>
  );
};

export default Card;
