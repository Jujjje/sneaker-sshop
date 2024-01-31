import {useQuery} from "@tanstack/react-query";
import {queries} from "src/shared/api";

export const UseItems = () => {
  return useQuery({
    queryKey: ["sneakers"],
    queryFn: () => queries.getSneakers(),
  });
};
