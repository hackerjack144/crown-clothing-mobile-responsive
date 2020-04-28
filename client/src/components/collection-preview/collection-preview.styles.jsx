import styled, {css} from 'styled-components';

const Preview = css`
    display: flex;
`;

export const CollectionPreviewContainer= styled.div`
   
    flex-direction: column;
    margin-bottom: 30px;
    ${Preview};

    @media screen and (max-width: 800px) {
        align-items: center;
    }
`;

export const TitleContainer = styled.h1`
   
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
    
    &:hover {
        cursor: pointer;
        color: grey;
    }

`;

export const PreviewContainer = styled.div`
    justify-content: space-between;
    ${Preview}

    @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
  }
`;