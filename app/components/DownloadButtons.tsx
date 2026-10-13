import { StoreStatus } from "./ui";

/** Pre-launch: availability status. At launch, replace with the official store badges. */
const DownloadButtons = ({ center = false }: { light?: boolean; center?: boolean }) => (
  <StoreStatus className={center ? "" : "!justify-start"} />
);

export default DownloadButtons;
