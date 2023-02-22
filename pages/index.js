import { getFeaturedEvents } from "@/dummy-data"
import EventLists from "@/components/events/event-list"

function HomePage() {
  const featuredEvents = getFeaturedEvents()


  return (
    <div>
      <EventLists items={featuredEvents}/>
    </div>
  )
}

export default HomePage