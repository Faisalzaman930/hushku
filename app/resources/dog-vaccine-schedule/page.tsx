import VaccinePageView, { vaccineMetadata } from "../../components/VaccinePageView";

export const metadata = vaccineMetadata("dog-vaccine-schedule");

export default function Page() {
  return <VaccinePageView slug="dog-vaccine-schedule" />;
}
