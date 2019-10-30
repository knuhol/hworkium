import { Col, Row } from 'react-bootstrap';
import React from 'react';

interface TitleProps {
  headline: string;
  introText: string;
}

const Title: React.FC<TitleProps> = ({ headline, introText }: TitleProps) => (
  <>
    <Row>
      <Col>
        <h1>{headline}</h1>
      </Col>
    </Row>
    <Row>
      <Col className="mt-4 mb-4">{introText}</Col>
    </Row>
  </>
);

export default Title;
