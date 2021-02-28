import React from 'react'
import { Form, Input, Row, Col } from 'antd';

const Informant = () => {
    const [form] = Form.useForm();
    return (
        <div className="pt-4">
            <Form
        form={form}
        layout="vertical"
      >
          <Row gutter={16}>
          <Col xs={24} md={12}>
          <Form.Item label="Capacity of Informant">
          <Input placeholder="Medical attendant" />
        </Form.Item>
              </Col>
          <Col xs={24} md={12}>
          <Form.Item label="Full names of informant">
          <Input placeholder="Test" />
        </Form.Item>
              </Col>
          <Col xs={24} md={12}>
          <Form.Item label="Document type">
          <Input placeholder="Justus" />
        </Form.Item>
              </Col>
          <Col xs={24} md={12}>
          <Form.Item label="Document Number">
          <Input placeholder="12345678" />
        </Form.Item>
              </Col>
          <Col xs={24} md={12}>
          <Form.Item label="Date of acknowledgment">
          <Input placeholder="12/02/2021" />
        </Form.Item>
              </Col>
          
          </Row>
           
          </Form>
        </div>
    )
}

export default Informant

