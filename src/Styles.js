import styled, { keyframes } from "styled-components";
const AnimateInEvent = keyframes`{
  0%{
    transform: translateX(0px);
  }
  100%{
    transform: translateX(100px);
  }
}`;
export const Home = styled.main`
  margin: 50px auto;
  background-color: #fff;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  animation: ${AnimateInEvent} 1s linear 1;
  animation-play-state: paused;

  a {
    padding: 15px;
    width: 100%;
    font-size: 18px;
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a:hover {
    background-color: #ecebec;
  }
`;

export const Characters = styled.div`
  margin: 50px auto;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  main {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  }

  li a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;

    &:hover {
      background-color: #ecebec;
    }
  }

  div {
    font-size: 22px;
    padding: 10px 0;
  }

  button {
    align-self: flex-start;
    padding: 5px 10px;
    font-size: 16px;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-weight: 600;
    }
  }

  ul {
    padding: 10px 0;
    list-style: none;
  }
`;

export const Episodes = styled.div`
  margin: 50px auto;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  main {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  }

  li a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;

    &:hover {
      background-color: #ecebec;
    }
  }

  div {
    font-size: 22px;
    padding: 10px 0;
  }

  button {
    align-self: flex-start;
    padding: 5px 10px;
    font-size: 16px;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-weight: 600;
    }
  }

  ul {
    padding: 10px 0;
    list-style: none;
  }
`;

export const EpisodeItem = styled.div`
  margin: 50px auto;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  main {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  }

  button {
    align-self: flex-start;
    padding: 5px 10px;
    font-size: 16px;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-weight: 600;
    }
  }

  .section {
    padding: 15px;
  }
  .text,
  .title,
  .name {
    padding: 5px 0;
  }
  .title {
    font-size: 14px;
  }
  .name {
    font-size: 20px;
    font-weight: 600;
  }
  .text {
    font-size: 16px;
  }
`;

export const CharacterItem = styled.div`
  margin: 50px auto;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  main {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.2);
  }

  button {
    align-self: flex-start;
    padding: 5px 10px;
    font-size: 16px;
    background: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
      font-weight: 600;
    }
  }

  .section {
    padding: 15px;
  }
  .text,
  .title,
  .name {
    padding: 5px 0;
  }
  .title {
    font-size: 14px;
  }
  .name {
    font-size: 20px;
    font-weight: 600;
  }
  .text {
    font-size: 16px;
  }
`;
