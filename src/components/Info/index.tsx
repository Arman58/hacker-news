import DataDate from "../DataDate";

type InfoProps = {
    by: string,
    time: number,
    text: string
}

const Info: React.FC<InfoProps> = ({by, time, text}) => {
    return (
        <div>
            <div className="flex items-center text-xs text-gray-400">
                <span>by {by}</span>
                <DataDate time={time}/>
            </div>
            <p className="text-gray-700">{text}</p>
        </div>
    )
}

export default Info;
