import { readable } from 'svelte/store';

export const apiEndpoint = readable("http://127.0.0.1:4000");
//export const apiEndpoint = readable("https://hormonal-pathways-api-a4dcfa854663.herokuapp.com");

export const rootURL = readable("http://localhost:3000");
//export const rootURL = readable("https://hormonal-pathways-e41a56ba4fc9.herokuapp.com");