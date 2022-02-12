import styled, { css } from "styled-components";

export const Flex = styled.div(
  ({ theme: { up } }) => css`
    display: flex;

    ${up(735)} {
      svg {
        margin-right: 10px;
      }

      button {
        height: 50%;
      }
    }
  `
);

export const ProfileHeader = styled.header(
  ({ theme: { down } }) => css`
    display: flex;
    margin-bottom: 44px;

    ${down(735)} {
      display: none;
    }
  `
);

export const ProfileMobileHeader = styled.div(
  ({ theme: { up } }) => css`
    display: flex;
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 24px;
    margin-top: 70px;

    ${up(735)} {
      display: none;
    }
  `
);

export const ProfileAvatar = styled.div(
  ({ theme: { down } }) => css`
    width: 35%;
    height: 100%;
    text-align: center;

    img {
      width: 166px;
      height: 166px;
      object-fit: cover;
      border-radius: 50%;
    }

    ${down(735)} {
      width: auto;
      margin-right: 28px;

      img {
        width: 77px;
        height: 77px;
      }
    }
  `
);

export const ProfileDescription = styled.section`
  width: 65%;
`;

export const ProfileLogin = styled.section(
  ({ theme: { down } }) => css`
    margin-bottom: 20px;

    h2 {
      max-width: 400px;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 300;
      font-size: 28px;
      line-height: 32px;
      margin: -5px 0 -6px;
      margin-right: 10px;
      color: #262626;
    }

    ${down(735)} {
      h2 {
        max-width: 200px;
        margin-right: 10px;
      }
    }
  `
);

export const ProfileMobileAbout = styled.div(
  ({ theme: { down } }) => css`
    display: none;
    padding: 0 16px 21px;
    font-size: 16px;
    line-height: 24px;
    word-wrap: break-word;

    h1 {
      font-weight: 600;
    }

    a {
      display: block;
      text-decoration: none;
      font-weight: 600;
      white-space: nowrap;
    }

    ${down(735)} {
      display: block;
    }
  `
);

export const ProfileAbout = styled(ProfileMobileAbout)(
  ({ theme: { down, up } }) => css`
    display: block;
    padding: 0px;

    ${down(735)} {
      display: none;
    }

    ${up(735)} {
      display: block;
    }
  `
);
