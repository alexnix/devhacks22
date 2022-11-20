import { useCurrentMuseumStore } from "../../currentMuseumStore";
import uniq from "lodash/uniq";

export const useGalleries = () => useCurrentMuseumStore((state) => uniq(
    state.exhibits.map((e) => e.clusterID)
));