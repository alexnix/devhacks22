import { useState } from "react";
import { Exhibit, useCurrentMuseumStore } from "../../currentMuseumStore";

const Visualize = () => {
    const {exhibits} = useCurrentMuseumStore();
    const [longDivRef, setLongDivRef] = useState<HTMLDivElement|null>(null);

    let e: Exhibit[] = [];
    for(let i = 0; i < 7; i++) {
        e = [...e, ...exhibits];
    }

    const galleries: string[] = [];
    exhibits.forEach((e) => {
        if(!galleries.includes(e.clusterID)) {
            galleries.push(e.clusterID)
        }
    })


    return (
        <div>
            <div className="overflow-x-scroll overflow-y-hidden flex flex-col">
                <div className="flex flex-row items-center space-x-2 w-fit" ref={r => setLongDivRef(r)}>
                    <div className="items-center flex flex-col">
                        <div className="text-sm w-16 break-words font-wrap lineh leading-none text-green-600 font-bold">Entrance in Museum Here</div>
                    </div>
                 
                    {galleries.map((g) => (
                        <div className="border border-black p-2">
                            <div>{g}</div>
                            <div>32312</div>
                            <div className="flex flex-row space-x-5">
                            {e.map((e) => (
                                <div className="items-center flex flex-col">
                                    <img src={e.img} alt={e.name} className="border border-black border-2 w-16 h-16 object-fill rounded-full" />
                                    <div className="text-sm w-16 break-words font-wrap lineh leading-none">{e.name ?? "Name Placeholder"}</div>
                                </div>
                            ))}
                            </div>
                        </div>
                    ))}

                    <div className="items-center flex flex-col">
                        <div className="text-sm w-16 break-words font-wrap lineh leading-none text-red-600 font-bold">Exit Here</div>
                    </div>
                    <div className="items-center flex flex-col">
                        <div className="text-sm w-16 break-words font-wrap lineh leading-none text-green-600 font-bold"></div>
                    </div>
                </div>
                <div className="flex flex-row items-center" style={{
                    width: longDivRef?.offsetWidth + "px"
                }}>
                    <div className="h-3 flex-grow bg-black"></div>
                    <div>
                        <img alt="" src="http://cdn.shopify.com/s/files/1/0253/8243/products/Carbon_Rubber_Triangle_Tiles_600x.png?v=1571264515" className="w-10 rotate-90"/>
                    </div>
                </div>
            </div>

            
            <div className="mx-auto my-3 w-fit">
                <div className="bg-green-500 rounded-xl text-white inline-block p-3 cursor-pointer" style={{fontSize: "40px"}}>
                    Click to Optimize Museum
                </div>
                <div>
                    <input type="checkbox"/> Remove poor performing exhibits
                </div>
                <div>
                    <input type="checkbox"/> Reorder galleries for more impactfull experience
                </div>
            </div>

        </div>
    );
};

export default Visualize;