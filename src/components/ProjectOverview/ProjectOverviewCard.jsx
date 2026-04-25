import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  color: var(--blue, #001944);
  padding-top: 1.5rem;
  padding-bottom: 2rem;
`;

const TopRow = styled.header`
  display: flex;
  align-items: center;
  gap: 0.65rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;

const Bullet = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--red, #e54a38);
  flex-shrink: 0;
`;

const OverviewLabel = styled.span`
  font-weight: 700;
  font-size: clamp(0.85rem, 2vw, 1rem);
`;

const Pipe = styled.span`
  font-weight: 400;
  opacity: 0.85;
`;

const Category = styled.span`
  font-weight: 500;
  font-size: clamp(0.7rem, 1.6vw, 0.85rem);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--red, #e54a38);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1.15fr);
  gap: 2rem 3rem;
  align-items: start;

  @media all and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ClientRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const ClientLogo = styled.img`
  max-width: 300px;
  height: 95px;
  object-fit: contain;
`;

const ClientName = styled.span`
  font-weight: 700;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #1f6b45;
`;

const Tagline = styled.p`
  font-weight: 500;
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.45;
  color: var(--red, #e54a38);
`;

const Body = styled.div`
  p {
    margin: 0 0 0.85rem;
    font-size: clamp(0.9rem, 1.8vw, 1rem);
    line-height: 1.55;
    color: rgba(0, 25, 68, 0.92);
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const LinkStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-top: 0.5rem;
`;

const GhostLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  max-width: 100%;
  padding: 0.65rem 1rem;
  border: 1px solid var(--red, #e54a38);
  color: var(--red, #e54a38);
  font-size: clamp(0.8rem, 1.6vw, 0.95rem);
  text-align: center;
  text-decoration: none;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(229, 74, 56, 0.08);
  }
`;

const Right = styled.div`
  position: relative;
  min-height: 280px;
`;

const CollageSingle = styled.img`
  width: 100%;
  height: 100%;
  min-height: 320px;
  max-height: 560px;
  object-fit: cover;
  border-radius: 4px;
  display: block;
`;

const CollageGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 0.5rem;
  min-height: 320px;

  img {
    width: 100%;
    height: 100%;
    min-height: 140px;
    object-fit: cover;
    border-radius: 4px;
    display: block;
  }
`;

const ReferenceCard = styled.aside`
  position: absolute;
  right: 0.75rem;
  bottom: 0.75rem;
  max-width: min(280px, 88%);
  padding: 0.85rem 1rem;
  background: #fff;
  box-shadow: 0 8px 24px rgba(0, 25, 68, 0.12);
  border-radius: 2px;

  @media all and (max-width: 900px) {
    position: static;
    margin-top: 0.75rem;
    max-width: 100%;
  }
`;

const ReferenceHeading = styled.p`
  font-weight: 700;
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
  color: var(--blue, #001944);
`;

const ReferenceLine = styled.p`
  font-size: 0.85rem;
  color: var(--red, #e54a38);
  margin: 0;
  line-height: 1.45;
`;

const ReferenceEmail = styled.a`
  display: block;
  margin-top: 0.25rem;
  font-size: 0.85rem;
  color: var(--red, #e54a38);
  text-decoration: underline;
  text-underline-offset: 2px;
`;

function ProjectOverviewCard({
  overviewLabel = 'Project overview',
  categoryLine,
  client,
  tagline,
  paragraphs = [],
  links = [],
  collage = [],
  clientReference,
}) {
  const hasSingleCollage = collage.length === 1;
  const hasMultiCollage = collage.length > 1;

  return (
    <Section>
      <TopRow>
        <Bullet aria-hidden />
        <OverviewLabel>{overviewLabel}</OverviewLabel>
        <Pipe>|</Pipe>
        <Category>{categoryLine}</Category>
      </TopRow>

      <Grid>
        <Left>
          {client ? (
            <ClientRow>
              {client.logoSrc ? (
                <ClientLogo src={client.logoSrc} alt={client.logoAlt || ''} />
              ) : null}
              <ClientName>{client.name}</ClientName>
            </ClientRow>
          ) : null}

          {tagline ? <Tagline>{tagline}</Tagline> : null}

          <Body>
            {paragraphs.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </Body>

          {links.length > 0 ? (
            <LinkStack>
              {links.map(({ label, href }) => (
                <GhostLink
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </GhostLink>
              ))}
            </LinkStack>
          ) : null}
        </Left>

        <Right>
          {hasSingleCollage ? (
            <CollageSingle
              src={collage[0].src}
              alt={collage[0].alt || ''}
              loading="lazy"
            />
          ) : null}

          {hasMultiCollage ? (
            <CollageGrid>
              {collage.map((item, i) => (
                <img
                  key={i}
                  src={item.src}
                  alt={item.alt || ''}
                  loading="lazy"
                />
              ))}
            </CollageGrid>
          ) : null}

          {clientReference ? (
            <ReferenceCard>
              <ReferenceHeading>
                {clientReference.heading || 'Client reference'}
              </ReferenceHeading>
              <ReferenceLine>
                {clientReference.name}
                {clientReference.role ? ` | ${clientReference.role}` : ''}
              </ReferenceLine>
              {clientReference.email ? (
                <ReferenceEmail href={`mailto:${clientReference.email}`}>
                  {clientReference.email}
                </ReferenceEmail>
              ) : null}
            </ReferenceCard>
          ) : null}
        </Right>
      </Grid>
    </Section>
  );
}

export default ProjectOverviewCard;
