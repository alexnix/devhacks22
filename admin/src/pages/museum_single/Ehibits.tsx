import { useOpen } from "react-modal-pirate";
import AddButton from "../../atoms/AddButton";
import { useMuseumStore } from "../../store";
import AddExhibit from "./AddExhibit";
import { useGalleries } from "./useGalleries";

const Exhibits = () => {
    const openModal = useOpen();
    const {exhibits} = useMuseumStore();
    const galleries = useGalleries(); 

    return (
        <div>
            {
                galleries.map((g) => (
                    <div className="border border-2 border-black rounded-lg p-2 mb-3 divide-y divide-gray-800">
                        {g}
                        {
                            exhibits.filter((e) => e.clusterID === g).map((e) => (
                                <div className="p-2 flex items-center space-x-5 ">
                                    <div>
                                        <img className="w-20" src={e.img} alt={e.name} />
                                    </div>  
                                    <div className="flex-grow">
                                        {e.name}
                                    </div>  
                                    <div>
                                        <b>Engagement Score</b>
                                    </div>                                    
                                </div>
                            ))
                        }
                    </div>
                ))
            }
            <AddButton text="Add Exhibit" onClick={() => openModal(<AddExhibit/>)}/>
        </div>
    );
};

export default Exhibits;