import Properties from "./Properties"
import "./PropertyList.css"
export default function PropertyList({ properties }) {
    return (

        <div className="PropertyList">
            {properties.map(p => (
                <Properties
                    key={p.id}
                    name={p.name}
                    price={p.price}
                    rating={p.rating}
                />
            ))}

        </div>
    )
}