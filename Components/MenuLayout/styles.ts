import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  & > header {
    position: absolute;
    top: 32px;

    width: 100%;
    padding-left: 48px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .line {
      position: absolute;
      left: 15%;
      width: 25%;
      height: 1px;
      background: rgba(255, 255, 255, 0.25);
      z-index: 2;
    }

    nav {
      width: 65%;
      padding-left: 96px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 40px;
      font-family: ${({ theme }) => theme.families.barlowCondensed};
      font-size: 1em;
      letter-spacing: 2px;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(5px);

      a {
        padding: 32px 0;
        transition: 0.4s ease;
        border-bottom: 2px solid transparent;

        &.active {
          border-color: #fff;

          &:hover {
            border-color: #fff;
          }
        }

        &:hover {
          border-color: rgba(255, 255, 255, 0.5);
        }
      }

      strong {
        font-weight: 600;
      }
    }

    .burguer {
      display: none;
    }

    @media screen and (max-width: 1024px) {
      .line {
        width: 18%;
        left: 14%;
      }
      nav {
        width: 75%;
        padding-left: 48px;
        gap: 32px;
      }
    }

    @media screen and (max-width: 768px) {
      top: 0;
      padding-left: 32px;

      .line {
        display: none;
      }

      nav {
        width: auto;
        padding: 0 32px;
        font-size: 0.875em;
      }

      strong {
        display: none;
      }
    }

    @media screen and (max-width: 525px) {
      padding: 16px 32px;

      nav {
        display: none;
      }

      .burguer {
        display: block;
      }
    }
  }
`;
