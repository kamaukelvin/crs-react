import React from 'react'
import { Steps, Button, message } from 'antd';
import { UserOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import './stepper.css'
import Child from 'components/stepper/steps/Child'
import Mother from 'components/stepper/steps/Mother'
import Father from 'components/stepper/steps/Father'
import Informant from 'components/stepper/steps/Informant'
import Viewer from 'react-viewer'
import image from 'assets/images/birth.png'

const { Step } = Steps;

const steps = [
  {
    title: 'CHILD',
    content: <Child/>,
  },
  {
    title: 'MOTHER',
    content: <Mother/>,
  },
  {
    title: 'FATHER',
    content: <Father/>,
  },
  {
    title: 'INFORMANT',
    content: <Informant/>,
  },
];

const Stepper = () => {
  const [current, setCurrent] = React.useState(0);
  const [ visible, setVisible ] = React.useState(false)

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="row">
        <div className="col-md-7 ">
          <h5 className="serial">Serial No: <span>9914400</span></h5>
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title} icon={<UserOutlined />} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action float-right">
      {current > 0 && (
          <Button className="prev__btn" style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary next__btn" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="success" onClick={() => message.success('Processing complete!')}>
            Submit form BA
          </Button>
        )}
      

      </div>
      </div>
      <div className="offset-md-1 col-md-4 image__preview" style={{backgroundImage:`url(${image})`}}>
          {/* <img src={image} alt="doc" style={{height:"100"}} onClick={() => { setVisible(true); } }/> */}
          <Viewer
      visible={visible}
      onClose={() => { setVisible(false); } }
      images={[
          {src:`${image}` , alt: ''}
        ]}
      />
      <div className="zoom__bar">
      <a href onClick={() => { setVisible(true); } }><ZoomInOutlined /></a>
      <a href onClick={() => { setVisible(true); } }><ZoomOutOutlined/></a>
      </div>
      </div>
      </div>
      )}
export default Stepper