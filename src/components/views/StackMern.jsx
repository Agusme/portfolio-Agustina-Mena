import { Col, Container, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { itemsStackMern } from "../../data/db";
import { Slide } from "react-awesome-reveal";

const StackMern = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-stack py-5 " id="stack">
      <h2 className="fw-bold text-green fs-1 text-center">{t("stack")}</h2>
      <Slide>
      <Container className="bg-glass py-4">
  <Row className="justify-content-start text-center">
    {itemsStackMern.map((item) => (
      <Col 
        lg={2} md={3} sm={6} xs={6} 
        key={item.name} 
        className="d-flex flex-column align-items-center text-center h-100 g-4"
      >
        <div className="d-flex align-items-center justify-content-center" style={{ height: "80px" }}>
          <img 
            src={item.imgIcon} 
            alt={item.alt} 
            className="img-fluid iconos-stack" 
            
          />
        </div>
        <p className="fw-semibold pt-2 mb-0">{item.nameSkill}</p>
      </Col>
    ))}
  </Row>
</Container>
      </Slide>
    </div>
  );
};

export default StackMern;
