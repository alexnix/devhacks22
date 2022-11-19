import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { useMuseumStore } from "../../store";
import Exhibits from "./Ehibits";

const tabComponents = {
    "Exhibits": <Exhibits/>,
    "Visualize": <p>Visualize</p>
}

interface MuseumSingleRouteParams {
    id: string;
};

const MuseumSingle = () => {
    const {id} = useParams<MuseumSingleRouteParams>();
    const hist = useHistory();
    const [tab, setTab] = useState<"Exhibits"|"Visualize">("Exhibits")
    const {loading, fetchExhibits} = useMuseumStore();

    useEffect(() => {
        fetchExhibits()
    }, [fetchExhibits])

    if(loading) {
        return <p>Loading</p>
    }

    return (
        <div>
            <small onClick={() => hist.goBack()} className="cursor-pointer">Back</small>
            <h1>{id}</h1>
            
            <div className="flex mb-5 mt-5">
                {["Exhibits","Visualize"].map(t => (
                    <div 
                        onClick={() => setTab(t as "Exhibits"|"Visualize")} 
                        className={`p-3 rounded-md cursor-pointer ${t === tab ? "bg-blue-500 text-white": ""}`}
                    >
                        {t}
                    </div>
                ))}
            </div>

            {tabComponents[tab]}
            
        </div>
    )
};

export default MuseumSingle;