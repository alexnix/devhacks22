import { useHistory } from "react-router-dom";

const data = [
    {
        id: 1,
        name:"Antipa", 
        img: "https://media.hotnews.ro/media_server1/image-2013-12-27-16294963-41-muzeul-antipa.jpg"
    },
    {
        id: 2,
        name: "Geologie", 
        img: "https://img.observatornews.ro/0/2017/2/14/199311/14870776955fc89a8a.jpg?w=910"
    },
    {
        id: 3,
        name:"Muzeul berii",
        img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/a1/f6/e3/beer-museum-prague.jpg?w=1200&h=-1&s=1"
    }
];

const MuseumsList = () => {
    const history = useHistory();

    const onMuseumClick = (id: number) => () => {
        history.push(`/museum/${id}`);
    }

    return (
        <div>
        <h1 className='text-xl mb-5'>Muzee</h1>
        <div className='flex flex-row'>
        {
          data.map((m) => (
            <div className='cursor-pointer' onClick={onMuseumClick(m.id)}>
              <img src={m.img} alt={m.name} width="200px"/>
              {m.name}
            </div>
          ))
        }
      </div>
        <button>Add Museum</button>
      </div>   
    )
}

export default MuseumsList;