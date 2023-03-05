import { TeamOutlined } from "@ant-design/icons";
interface DataCardTypes{
    title: string,
    number: number
}
const DataCard = ({title, number}: DataCardTypes) => {
    return (    
        <div className="block overflow-hidden rounded-md bg-white p-6 shadow-lg hover:bg-stone-100 hover:cursor-pointer ">
                    <h5 className="mb-2 text-md font-medium leading-tight text-sky-900 ">
                    {title}
                    </h5>
                    <div className="flex mt-4 items-center">
                      <div className="bg-stone-100 text-lg px-3.5 py-2 items-center rounded-3xl">
                        <TeamOutlined />
                      </div>
                      <div className=" text-base font-bold ml-2  ">{number}</div>
                    </div>
                 
                </div>
      );
}
 
export default DataCard;