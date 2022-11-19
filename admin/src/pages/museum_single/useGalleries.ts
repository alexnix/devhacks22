import { useMuseumStore } from "../../store";
import uniq from "lodash/uniq";

export const useGalleries = () => useMuseumStore((state) => uniq(
    state.exhibits.map((e) => e.clusterID)
));