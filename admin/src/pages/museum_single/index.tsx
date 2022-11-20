import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom"
import { useCurrentMuseumStore } from "../../currentMuseumStore";
import { useMuseumsStore } from "../../museumsStore";
import Exhibits from "./Ehibits";
import Visualize from "./Visualize";

const tabComponents = {
    "Exhibits": <Exhibits/>,
    "Visualize": <Visualize/>
}

interface MuseumSingleRouteParams {
    id: string;
};

const MuseumSingle = () => {
    const {id} = useParams<MuseumSingleRouteParams>();
    const museum = useMuseumsStore((state) => state.museums.find((m) => m.id === Number(id)));
    const hist = useHistory();
    const [tab, setTab] = useState<"Exhibits"|"Visualize">("Exhibits")
    const {loading, fetchExhibits} = useCurrentMuseumStore();

    useEffect(() => {
        fetchExhibits()
    }, [fetchExhibits])

    if(loading) {
        return <p>Loading</p>;
    }

    return (
        <div>
            <small onClick={() => hist.goBack()} className="cursor-pointer">Back</small>
            <h1 className="text-xl font-bold">{museum?.name}</h1>
            
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