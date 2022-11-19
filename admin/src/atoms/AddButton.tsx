const AddButton: React.FC<{
    text: string;
    onClick: () => void;
}> = ({text, onClick}) => {
    return <button onClick={onClick} className="px-3 py-2 bg-gray-200">{text}</button>
}

export default AddButton;