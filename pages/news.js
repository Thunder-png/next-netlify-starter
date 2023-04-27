import { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { createHttpLink } from '@apollo/client/link/http';
import { setContext } from '@apollo/client/link/context';
import Head from 'next/head';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

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