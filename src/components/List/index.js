import './List.css'

export default function List({activities}){
    return(
        <ul>
            {activities.map((activity, index)=>(
                <li key={activity.id}>{activity.name}</li>
            ))}
            <li>hello world</li>
        </ul>
    );
}