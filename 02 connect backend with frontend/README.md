## Learning & Accomplishements In This Folder

- Backend server serves a jokes array on `api/jokes` endpoint. This response from backend is showed on frontend.
- standardization of `naming the endpoints`, use `/api/v1/something` as industry code practices.
- Using `axios` library for fetching data from backend.
- why use it?
  - it gives more control and features.
  - it is very popular these days in industry.
  - you can manipulate incoming response from server on the fly.
  - you have more control when fetching was failed or successful.
  - automatically convert data to JSON, no need for `JSON.stringify`.
  - and many more.
- using `useEffect()` from react to run `axios` package to make a backend call.

<br>

- ### Problems(Main Learning of this folder is `CORS Policy` ):

  - when making backend call from frontend using `fetch` `axios` etc., there is a thing called `CORS Policy`.
  - CORS: Cross-Origin Resource Sharing.
  - it doesnt let you access backend straight away, you(your origin) need to be verified first.
  - in simple words it is a browser security mechanism, that doesn't allow different domains to access the website and its server. Only verified and allowed domains can access the web application.
  - for example if `BackEnd Server` is on port 8000 or some other domain, then only the request from 8000 port or that same domain are considered, other are blocked by `CORS`.
    <br>

- ### Solution To CORS Policy

  - use npm package `cors`. or
  - use proxies (this is what i used).
  - using proxies is also different for `create-react-app` command & `vite@latest` command.
  - for `create-react-app` just go to package.json and make a new key called 'proxy': 'domain name/ url'.
  - but for `vite@latest` go to `vite.config.js` file and inside the `defineConfig` function,
    add new key called `server:{ proxy: { "endpoint_name": "put localhost_url/domain_url here" } }`.
    That is it.

  <br>

- ### Some Info About Proxy Using:

  - In `vite.config.js` file the function `defineConfig()` takes the proxy.
  - It remove the CORS error, it makes the backend think that request is coming from same origin
    that the backend is on.
  - for example here:

    ```javascript
    export default defineConfig({
      plugins: [react()],
      server: {
        proxy: {
          "/api": "http://localhost:8000",
        },
      },
    });
    ```

    when ever there is a request from frontend which include `/api` in it. this function `defineConfig` will automatically add the defined localhost_url or domain_url in front of `/api` and it will also make CORS error go away as it makes the backend think that origin is same and request is coming from same localhost_url or domain_url that the backend is running on.
