import React from 'react'
import { Form, Input, Row, Col } from 'antd';

const Child = () => {
    const [form] = Form.useForm();
    return (
        <div className="pt-4">
            <Form
        form={form}
        layout="vertical"
      >
          <Row gutter={16}>
          <Col xs={24} md={12}>
          <Form.Item label="First Name">
          <Input placeholder="John" />
        </Form.Item>
              </Col>
          <Col xs={24} md={12}>
          <Form.Item label="Middle Name">
          <Input placeholder="Otieno" />
        </Form.Item>
              </Col>
          <Col xs={24} md={12}>
          <Form.Item label="Father's Name">
          <Input placeholder="Justus" />
        </Form.Item>
              </Col>
          <Col xs={24} md={12}>
          <Form.Item label="Date of Birth">
          <Input placeholder="12/02/2021" />
        </Form.Item>
              </Col>
          <Col xs={24} md={12}>
          <Form.Item label="Other's (specify)">
          <Input placeholder="12/02/2021" />
        </Form.Item>
              </Col>
          <Col xs={24} md={12}>
          <Form.Item label="Nature of birth">
          <Input placeholder="Born alive" />
        </Form.Item>
              </Col>
          <Col xs={24} md={12}>
          <Form.Item label="Sex">
          <Input placeholder="Male" />
        </Form.Item>
              </Col>
          <Col xs={24} md={12}>
          <Form.Item label="Type of birth">
          <Input placeholder="Single" />
        </Form.Item>
              </Col>
          <Col xs={24} md={12}>
          <Form.Item label="Weight of birth">
          <Input placeholder="12kg" />
        </Form.Item>
              </Col>
          <Col xs={24} md={12}>
          <Form.Item label="Place of birth">
          <Input placeholder="AgaKhan Hospital" />
        </Form.Item>
              </Col>
          </Row>
           
          </Form>
        </div>
    )
}

export default Child
