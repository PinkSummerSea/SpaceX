import { useQuery } from "@apollo/client";
import { GET_SPACE_MISSION } from "../graphql/queries";

export const useLaunches = (limit, order, sort) => {
  const { data, error, loading } = useQuery(GET_SPACE_MISSION, {
    variables: {
      limit,
      order,
      sort,
    },
  });
  return { data, error, loading };
};
