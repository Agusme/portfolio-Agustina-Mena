import { itemsCertification } from "../../data/db";
import CarouselComponent from "../common/CaruoselComponent";
import { useTranslation } from "react-i18next";

export default function Certifications() {
  const { t } = useTranslation();
  
  return (
    <CarouselComponent
      title={t("certificationTittle")}
      items={itemsCertification}
    />
  );
}
