import { useHistory } from "react-router-dom";
import AddButton from "../../atoms/AddButton";
import { useMuseumsStore } from "../../museumsStore";

const MuseumsList = () => {
    const history = useHistory();
    const {museums} = useMuseumsStore();

    const onMuseumClick = (id: number) => () => {
        history.push(`/museum/${id}`);
    }

    return (
        <div>
        <h1 className='text-xl font-bold mb-5'>Muzee</h1>
        <div className='flex flex-row space-x-2 mb-5'>
        {
          museums.map((m) => (
            <div key={m.id} className='cursor-pointer' onClick={onMuseumClick(m.id)}>
              <img src={m.img} alt={m.name} className="object-cover w-60 h-60"/>
              <div className="bg-gray-200 p-3">{m.name}</div>
            </div>
          ))
        }
      </div>
        <AddButton text="Add Museum" onClick={() => {
          // TODO
        }}/>
      </div>   
    )
}

export default MuseumsList;