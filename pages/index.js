import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { createHttpLink } from '@apollo/client/link/http';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'https://main--arif-yildirims-team-oieo5.apollographos.net/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer 831007883d68385fbf3b5b1e9d792416ae1cad8f97ef5e529a62674e4258be2e`,
      'Content-Type': 'application/json',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const HOMEPAGE_QUERY = gql`
  query {
    Homepage {
      _id
      news_img
      agents_img
      battlepass_img
      bundle_img
      contract_img
      map_img
      voices_img
      weapons_img
      crosshair_img
    }
  }
`;

export async function getStaticProps() {
  const { data } = await client.query({ query: HOMEPAGE_QUERY });
  const homepage = data.Homepage;

  return {
    props: {
      homepage,
    },
  };
}

const titles = [
  'Haberler',
  'Ajanlar',
  'Savaş Biletleri',
  'Paketler',
  'Kontratlar',
  'Haritalar',
  'Oyuncu Sesleri',
  'Silahlar',
  'Crosshair',
];

const HomePage = ({ homepage }) => {
  const cards = [];

  for (const key in homepage) {
    if (homepage.hasOwnProperty(key) && key !== '_id') {
      const imageUrl = homepage[key];
      const title = titles.shift();
      cards.push({ imageUrl, title });
    }
  }

  return (
    <div className="App">
      <div className="card-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <img src={card.imageUrl} alt={card.title} />
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
