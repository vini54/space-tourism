import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  min-height: 640px;
  background: url("/assets/home/background-home-desktop.jpg") no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 15vh;

  .left {
    max-width: 400px;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1em;
    color: ${({ theme }) => theme.colors.color3};

    h3 {
      font-family: ${({ theme }) => theme.families.barlowCondensed};
      font-size: 1.5em;
      color: ${({ theme }) => theme.colors.color2};
    }

    h1 {
      font-family: ${({ theme }) => theme.families.bellefair};
      font-size: 9em;
    }

    p {
      font-family: ${({ theme }) => theme.families.barlow};
      font-size: 1em;
      color: ${({ theme }) => theme.colors.color2};
      line-height: 1.5em;
    }
  }

  .right {
    max-width: 260px;
    width: 25%;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: #fff;
    font-family: ${({ theme }) => theme.families.bellefair};
    color: ${({ theme }) => theme.colors.color1};
    font-size: 2em;
    position: relative;

    &::before {
      content: "";
      width: 150%;
      background: rgba(255, 255, 255, 0.15);
      aspect-ratio: 1;
      position: absolute;
      left: -25%;
      top: -25%;
      border-radius: 50%;
      transform: scale(0);
      transition: 0.4s ease-in-out;
    }

    &:hover::before {
      transform: scale(1);
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    background: url("/assets/home/background-home-tablet.jpg") no-repeat;

    .left {
      width: 100%;
      align-items: center;
      text-align: center;

      h3 {
        font-size: 1.25em;
      }

      p {
        font-size: 1em;
      }
    }

    .right {
      max-width: 200px;
      width: 40%;
      font-size: 1.5em;
    }
  }

  @media screen and (max-width: 425px) {
    background: url("/assets/home/background-home-mobile.jpg") no-repeat;
    background-size: cover;

    .left {
      h3 {
        font-size: 1em;
      }

      h1 {
        font-size: 5em;
      }

      p {
        padding: 0 1em;
        font-size: 0.9em;
      }
    }

    .right {
      width: 50%;
    }
  }
`;
