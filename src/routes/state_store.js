import { readable } from 'svelte/store';

//export const apiEndpoint = readable("http://localhost:4000");
export const apiEndpoint = readable("https://hormonal-pathways.colab.duke.edu:5000");

export const rootURL = readable("http://localhost:5173");
//export const rootURL = readable("https://hormonal-pathways.colab.duke.edu");