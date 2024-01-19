import { WithId } from "mongodb";

export const defaultTransform = (d: WithId<Document>) => ({
  ...d,
  id: d._id.toString(),
});
