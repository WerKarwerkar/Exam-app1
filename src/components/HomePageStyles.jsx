import styled, { keyframes } from "styled-components";

export const SectionOne = styled.section`
  align-items: center;
  color: white;
  margin-bottom: 50px;
  margin-top: 100px;
  padding: 20px;

  @media (max-width: 768px) {
    margin-top: 250px;
  }
`;

export const Column = styled.div`
  text-align: center;

  h1 {
    font-size: 32px;
    color: #63f636;
  }

  button {
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 10px 20px;
    background-color: #e55983;
    border: none;
    color: black;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: transparent;
      color: #e55983;
      border: 2px solid #e55983;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 14px;
    }

    button {
      padding: 8px 16px;
      font-size: 12px;

      &:hover {
        background-color: transparent;
        color: #e55983;
        border: 2px solid #e55983;
      }
    }
  }
`;

const slideAnimation = keyframes`
  0% { transform: translateX(0); }
  16.67% { transform: translateX(0); }        
  20.83% { transform: translateX(-100%); }   
  37.5% { transform: translateX(-100%); }    
  41.67% { transform: translateX(-200%); }    
  58.33% { transform: translateX(-200%); }    
  62.5% { transform: translateX(-300%); }     
  79.17% { transform: translateX(-300%); }    
  83.33% { transform: translateX(0); }        
  100% { transform: translateX(0); }          
`;

export const SectionTwo = styled.section`
  text-align: center;
  color: black;
  border: 2px solid black;
  margin: 450px 0 0 0;

  @media (max-width: 768px) {
    margin: 450px 0 0 0;
  }

  h2 {
    font-size: 24px;
    margin-bottom: 20px;
    padding-top: 15px;
    margin: 0px;
    padding-bottom: 15px;
    border-bottom: 2px solid black;

    @media (max-width: 768px) {
      font-size: 16px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }

  .carousel {
    overflow: hidden;
    width: calc(100% - 20px);
    height: 600px;
    margin: 0;
    border: 10px solid white;

    @media (max-width: 768px) {
      height: 300px;
    }
  }

  .carousel-track {
    display: flex;
    animation: ${slideAnimation} 16s infinite;

    @media (max-width: 768px) {
      animation: ${slideAnimation} 10s infinite;
    }
  }

  .carousel-image {
    width: 100%;
    max-width: 100%;
    height: 600px;
    flex-shrink: 0;
    object-fit: cover;

    @media (max-width: 768px) {
      height: 300px;
    }
  }

  .view-venues {
    margin-top: 20px;
    padding-top: 15px;
    padding-bottom: 20px;
    font-size: 24px;
    margin: 0px;
    color: black;
    cursor: pointer;
    display: block;
    border-top: 2px solid black;

    &:hover {
      &:hover {
        text-decoration-color: #e55983;
      }
    }

    @media (max-width: 768px) {
      font-size: 14px;
      padding-top: 10px;
      padding-bottom: 10px;
    }
  }
`;

export const SectionThree = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
  background-color: transparent;
  color: black;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 50px;
    gap: 50px;
  }
`;

export const TextWithImage = styled.div`
  display: flex;
  gap: 20px;
  border: 2px solid black;
  padding: 60px;
  height: 100%;

  .text {
    flex: 1;
    padding: 20px;
    border: 2px solid black;
    color: black;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h3 {
      background-color: #e55983;
      color: black;
      padding: 5px 10px;
      display: inline-block;
      font-size: 16px;
      border: 2px solid black;
      width: fit-content;
    }

    p {
      font-size: 16px;
      margin-top: 10px;
      text-align: justify;
      line-height: 2;
    }

    a {
      color: #e55983;
      font-size: 16px;
      text-decoration: none;
      align-self: flex-end;
      &:hover {
        text-decoration: underline;
        text-decoration-color: #e55983;
      }
    }
  }

  .image {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: calc(100% - 20px);

    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      display: block;
      border: 5px solid #63f636;
    }

    @media (max-width: 1055px) {
      width: 100%;

      img {
        height: auto;
        max-height: 300px;
      }
    }
  }

  @media (max-width: 1055px) {
    flex-direction: column;
    padding: 20px;

    .text {
      order: 2;
      padding: 10px;
      border: none;

      h3 {
        font-size: 14px;
        padding: 3px 8px;
      }

      p {
        font-size: 14px;
        line-height: 1.5;
      }

      a {
        font-size: 14px;
      }
    }

    .image {
      order: 1;

      img {
        height: auto;
        max-height: 300px;
      }
    }
  }
`;

export const ImageWithText = styled(TextWithImage)``;
