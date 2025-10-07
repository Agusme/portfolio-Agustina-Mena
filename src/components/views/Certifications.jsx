import { itemsCertifaction } from "../../data/db";
import CarouselComponent from "../common/CaruoselComponent";

export default function Certifications() {
  return (
    <CarouselComponent
      title="Certificaciones"
      items={itemsCertifaction}
    />
  );
}
