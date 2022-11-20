import { useReducer, useState } from "react";
import {produce} from "immer";
import { Exhibit, ExhibitParser, useCurrentMuseumStore } from "../../currentMuseumStore";
import { useGalleries } from "./useGalleries";

const INPUT_CN = "p-2 border border-black rounded-md";

type State = {
    data: Partial<Record<keyof Exhibit, any>>,
    isReady: false,
} | {
    data: Exhibit,
    isReady: true
};

type Action = 
    | { type: "change", field: keyof Exhibit, value: any };

function reducer(state: State, action: Action): State {
    return produce(state, (draft) => {
        draft.data[action.field] = action.value;
        draft.isReady = ExhibitParser.safeParse(draft.data).success;
    });
}

const AddExhibit = () => {
    const galleries = useGalleries();
    const {addExhibit} = useCurrentMuseumStore();
    const [gallery, setGallery] = useState(galleries[0]);

    const [newExhibitData, dispatch] = useReducer(reducer, {
        data: {
            clusterID: gallery,
        },
        isReady: false
    })

    const onAdd = async () => {
        if(newExhibitData.isReady) {
            addExhibit(newExhibitData.data);
        }
    }

    return (
        <div>
            <h1 className="text-xl mb-5">Add Exhibit</h1>
            <div className="flex flex-col space-y-3">
                <div>
                    <input 
                        className={INPUT_CN}
                        type="text"
                        placeholder="Name"
                        onChange={(e) => dispatch({
                            type: "change",
                            field: "name",
                            value: e.target.value
                        })}
                    />
                </div>

                <div>
                    <textarea
                        className={INPUT_CN}
                        placeholder="Description"
                        onChange={(e) => dispatch({
                            type: "change",
                            field: "description",
                            value: e.target.value,
                        })}
                    >
                    </textarea>
                </div>

                <div>
                    <input
                        className={INPUT_CN}
                        type="text"
                        placeholder="Image"
                        onChange={(e) => dispatch({
                            type: "change",
                            field: "img",
                            value: e.target.value,
                        })}
                    />
                </div>
        
                <div>
                    <select value={gallery} onChange={(e) => {
                        setGallery(e.target.value);
                        if(e.target.value !== "+") {
                            dispatch({
                                type: "change",
                                field: "clusterID",
                                value: e.target.value,
                            });
                        }
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
                            <input
                                className={INPUT_CN}
                                type="text"
                                placeholder="New Gallery Name"
                                onChange={(e) => dispatch({
                                    type: "change",
                                    field: "clusterID",
                                    value: e.target.value,
                                })}
                            />
                        </div>  
                    )
                }

                <div>
                    <button disabled={!newExhibitData.isReady} className="bg-gray-500 px-5 py-2 text-white" onClick={onAdd}>Add</button>
                </div>

            </div>

        </div>
    )
};

export default AddExhibit;