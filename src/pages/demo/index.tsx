import { NextPage } from 'next';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Col, Row } from 'react-grid-system';

import {
  selectUser,
  updateName,
} from '../../infrastructure/store/users/userSlice';
import Layout from '../../components/layout/Layout';

const Demo: NextPage = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const demo = () => {
    dispatch(updateName('Hello'));
  };
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
        <h1>{user}</h1>
        <button onClick={demo} className="bg-red-300">
          demo
        </button>
      </div>
    </Layout>
  );
};

export default Demo;
