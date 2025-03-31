import React from "react";
import styled from "styled-components";

const HeaderContainer = () => (
    <Container>
        <ImageContainer />
        <PortfolioPhotoContainer>

        </PortfolioPhotoContainer>
        <InfosContainer>
            <NameContainer>

            </NameContainer>
            <JobContainer>

            </JobContainer>
            <JobContainer>

            </JobContainer>
            <CoordinateContainer>
                Coordonnées
            </CoordinateContainer>
        </InfosContainer>
    </Container>
)

export default HeaderContainer;

const Container = styled.header`
    padding: 3em;
    border-width: 0.1em;
    border-style: solid;
    border-radius: 0.4em;
    background-color: rgb(255, 255, 255);
    border-color: rgb(217, 230, 241);
`;

const ImageContainer = styled.img`
    display: block;
`;

const PortfolioPhotoContainer = styled.div`

`;

const InfosContainer = styled.div``;

const NameContainer = styled.h1`

`;

const JobContainer = styled.div`

`;

const CoordinateContainer = styled.button`

`;
