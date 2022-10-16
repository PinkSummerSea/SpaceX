import { gql } from "@apollo/client";

// It looks like the API does not provide the most updated data.
// It says the next launch in the future will happen on December 6th, 2020.
// So I assume querying "launchesPast", sorted by launch_date_local descending and limited to 10 results, will make most sense in this case.
// Also in the wireframe, it says "Rocket Type: Falcon 9". However it is the "rocket_name" that returns "Falcon 9". Hence I chose to display the "rocket_name" on client side. But I also queried the "rocket_type" data just in case we need to display "rocket_type" instead.

export const GET_SPACE_MISSION = gql`
  query GetSpaceMission($limit: Int!, $order: String!, $sort: String!) {
    launchesPast(limit: $limit, order: $order, sort: $sort) {
      mission_name
      launch_date_local
      launch_site {
        site_name
      }
      links {
        video_link
        mission_patch
      }
      rocket {
        rocket_name
        rocket_type
      }
      id
      launch_success
    }
  }
`;
