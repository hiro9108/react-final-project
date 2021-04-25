import { NextPage } from 'next';
import { Container, Col, Row } from 'react-grid-system';

import Layout from '../../components/layout/Layout';

const Demo: NextPage = () => {
  return (
    <Layout title="demo">
      <div className="h-screen flex items-center justify-center">
        <Container fluid>
          <Row>
            <Col md={3} debug>
              <h1>Demo Page1</h1>
            </Col>
            <Col md={3} debug>
              <h1>Demo Page1</h1>
            </Col>
            <Col md={3} debug>
              <h1>Demo Page1</h1>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
};

export default Demo;
