import VaccinePageView, { vaccineMetadata } from "../../components/VaccinePageView";

export const metadata = vaccineMetadata("cat-vaccine-schedule");

export default function Page() {
  return <VaccinePageView slug="cat-vaccine-schedule" />;
}
