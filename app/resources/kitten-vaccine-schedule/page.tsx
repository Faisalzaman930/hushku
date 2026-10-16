import VaccinePageView, { vaccineMetadata } from "../../components/VaccinePageView";

export const metadata = vaccineMetadata("kitten-vaccine-schedule");

export default function Page() {
  return <VaccinePageView slug="kitten-vaccine-schedule" />;
}
