# Question

Our team wants to offer customers the ability to request on-demand showings, where a
showing agent drives to a chosen property at a certain time and shows the property to
the potential buyers. To create the system that routes requests to agents who are
nearby, we need to know the driving distance from a given showing agent’s location to
the given property. The team is considering using the Google Distance Matrix API
[https://developers.google.com/maps/documentation/distance-matrix/]

# Implementation Notes

If I were to add more features to the API wrapper, I would also include an optional arrival time parameter. Especially given traffic conditions in LA, distance is not necessarily a great metric for which agents to reach out to. If you also passed in an arrival time, we could calculate whether or not it's even possible for the agent to arrive at the appointment on time based on the duration_in_traffic field in the API response. The Distance Matrix docs also recommend implementing exponential backoff for robust error handling so that you can retry certain failed requests without overloading the API.