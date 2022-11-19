import { useState } from "react";
import { useMuseumStore } from "../../store";
import { useGalleries } from "./useGalleries";

const INPUT_CN = "p-2 border border-black rounded-md";

const AddExhibit = () => {
    const galleries = useGalleries();
    const {addExhibit} = useMuseumStore();
    const [gallery, setGallery] = useState(galleries[0]);

    const onAdd = () => {
        addExhibit({
            name: "plm",
            cluster: "lol"
        })
    }

    return (
        <div>
            <h1 className="text-xl mb-5">Add Exhibit</h1>
            <div className="flex flex-col space-y-3">
                <div>
                    <input className={INPUT_CN} type="text" placeholder="Name"/>
                </div>

                <div>
                    <textarea className={INPUT_CN} placeholder="Description">

                    </textarea>
                </div>

                <div>
                    <input className={INPUT_CN} type="text" placeholder="Image"/>
                </div>
        
                <div>
                    <select value={gallery} onChange={(e) => {
                        setGallery(e.target.value)
                    }} className={INPUT_CN}>
                        {
                            galleries.map(g => (
                                <option value={g}>{g}</option>
                            ))
                        }
                        <option value="+">+ New Gallery</option>
                    </select>
                </div>

                {
                    gallery === "+" && (
                        <div>
                            <input className={INPUT_CN} type="text" placeholder="New Gallery Name"/>
                        </div>  
                    )
                }

                <div>
                    <button className="bg-gray-500 px-5 py-2 text-white" onClick={onAdd}>Add</button>
                </div>

            </div>

        </div>
    )
};

export default AddExhibit;