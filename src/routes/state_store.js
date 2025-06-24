import { readable } from 'svelte/store';
import {PUBLIC_HORMONE_MODEL_API_ENDPOINT, PUBLIC_ROOT_URL} from '$env/static/public';

export const apiEndpoint = readable(PUBLIC_HORMONE_MODEL_API_ENDPOINT);

export const rootURL = readable(PUBLIC_ROOT_URL);