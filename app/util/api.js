import { getAuthToken, getRefreshToken, setAuthToken } from './auth';

const apiBaseUrl = process.env.API_BASE_URL || 'http://localhost:3001';

async function refreshAuthToken() {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error(
      'User is not authenticated. No refresh token available. Please have the user sign in again.'
    );
  }

  const response = await fetch(`${apiBaseUrl}/auth/refresh`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ refreshToken }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Failed to refresh token');
  }

  const data = await response.json();
  setAuthToken(data.accessToken);
  return data.accessToken;
}

async function makeFetchRequest(url, method, data = null) {
  const token = getAuthToken();

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const options = {
    method,
    headers,
    ...(data && { body: JSON.stringify(data) }),
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'API request failed');
  }

  return response.json();
}

/**
 * Makes an API request to the given endpoint with the given method and data
 *
 * @param {string} url - the API endpoint to call
 * @param {GET | POST | PUT | PATCH | DELETE} method - the HTTP method to use
 * @param {object} data - the data to send in the request body
 * @returns {Promise<object>} - the response data
 */
async function callApiWith(url, method = 'GET', data = null) {
  try {
    return await makeFetchRequest(`${apiBaseUrl}${url}`, method, data);
  } catch (error) {
    if (error?.response?.status === 401) {
      // Token might be expired, try to refresh it
      await refreshAuthToken();
      return makeFetchRequest(`${apiBaseUrl}${url}`, method, data);
    } else {
      throw error;
    }
  }
}

/**
 * Makes a GET request to the given URL
 * @param {string} url
 * @returns {Promise<object>} - the response data
 *
 * @example
 * const data = await GET('/users/1');
 * console.log(data);
 * // { id: 1, name: 'John Doe' }
 */
async function GET(url) {
  return callApiWith(url, 'GET');
}

/**
 * Makes a POST request to the given URL with the given data
 * @param {string} url
 * @param {object} data
 * @returns {Promise<object>} - the response data
 *
 * @example
 * const payload = { name: 'John Doe' };
 * const data = await POST('/users', payload);
 * console.log(data);
 * // { id: 1, name: 'John Doe' }
 */
async function POST(url, data) {
  return callApiWith(url, 'POST', data);
}

/**
 * Makes a PUT request to the given URL with the given data
 * @param {string} url
 * @param {object} data
 * @returns {Promise<object>} - the response data
 *
 * @example
 * const data = await PUT('/users/1', { name: 'John Doe' });
 * console.log(data);
 * // { id: 1, name: 'John Doe' }
 */
async function PUT(url, data) {
  return callApiWith(url, 'PUT', data);
}

/**
 * Makes a PATCH request to the given URL with the given data
 * @param {string} url
 * @param {object} data
 * @returns {Promise<object>} - the response data
 *
 * @example
 * const data = await PATCH('/users/1', { name: 'John Doe' });
 * console.log(data);
 * // { id: 1, name: 'John Doe' }
 */
async function PATCH(url, data) {
  return callApiWith(url, 'PATCH', data);
}

/**
 * Makes a DELETE request to the given URL
 * @param {string} url
 * @returns {Promise<object>} - the response data
 *
 * @example
 * const data = await DELETE('/users/1');
 * console.log(data);
 * // { message: 'User deleted' }
 */
async function DELETE(url) {
  return callApiWith(url, 'DELETE');
}

const API = Object.freeze({
  GET,
  POST,
  PUT,
  PATCH,
  DELETE,
});

export default API;
