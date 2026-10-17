import { Link } from "react-router";
import type { CampusEvent } from "../data/events";
import { Card } from "./ui/Card";
import { Tag } from "./ui/Tag";

type EventCardProps = {
  event: CampusEvent;
};

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <Card>
      <h2>{event.title}</h2>
      <p>
        {event.date} • {event.place}
      </p>
      <Tag>{event.seats} seats</Tag>
      <div style={{ marginTop: "var(--space-3)" }}>
        <Link to={`/events/${event.id}`}>Details</Link>
      </div>
    </Card>
  );
};
