import { WithId } from "mongodb";

export const defaultTransform = (d: WithId<Document> | undefined) => {
  if (d) return { ...d, id: d._id.toString() };
};
