import VaccinePageView, { vaccineMetadata } from "../../components/VaccinePageView";

export const metadata = vaccineMetadata("puppy-vaccine-schedule");

export default function Page() {
  return <VaccinePageView slug="puppy-vaccine-schedule" />;
}
