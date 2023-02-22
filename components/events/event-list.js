import EventItem from "./event-item"

export default function EventLists({ items }) {
  return (
    <div>
      {items.map(event => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </div>
  )
}
