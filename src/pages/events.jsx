import React from "react";
import EventsView from "../legacy/components/pages/events/EventsView";
import Layout from "../legacy/layouts/Layout";

// Sync route definition
const EventsPage = () => (
  <Layout>
    <EventsView />
  </Layout>
);

export default EventsPage;
