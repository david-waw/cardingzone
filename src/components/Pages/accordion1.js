import React, { useState } from 'react';
import { Data } from './Data1';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { FiPlus, FiMinus } from 'react-icons/fi';
import "./accordion.scss"

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 123vh;
  background: #fff;
`;

const Container = styled.div`
 
width:90%;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  height:229vh;
`;

const Wrap = styled.div`
  height:77px;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
   
  }
  span {
    margin-right: 1.5rem;
  }
`;

const Dropdown = styled.div`
 width: 100%;
    height: auto;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  
    -ms-flex-align: center;
    /* align-items: center; */
    border-bottom: 1px solid #00ffb9;
    border-top: 1px solid #00ffb9;
    /* text-align: left; */
  p {
    font-size: 12px;
  }
`;

const Accordion1 = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = index => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: '#00FFB9', size: '25px' }}>
      <AccordionSection>
              <Container>
              <div className="heading"> <i class="fa fa-plus" aria-hidden="true"></i>PAYMENTS</div>
          {Data.map((item, index) => {
            return (
                <>
                
                   <div className="underline"></div>
                    <Wrap onClick={() => toggle(index)} key={index}>
                        
                        <h1>{item.question}</h1>
                        
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.answer}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export default Accordion1;