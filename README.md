# 🚀 HTMX + Deno 
Live demo [here](https://htmxexample.deno.dev/)

[HTMX](https://htmx.org) is a library that allows you to access AJAX, WebSockets and Server Sent Events directly in HTML, using attributes, so you can build modern user interfaces with the simplicity and power of hypertext.

[Deno](https://deno.land) is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust. It can also render jsx to html on the server side. 

> This uses 0 boiler plate code and 0 build steps. With this you can build modern web applications with the simplicity in a modular way.

In this app you can see how to create a simple blog.

## 📦 Installation
```bash
git clone https://github.com/About7Sharks/htmxSite.git
```
## 📝 Requirements
You will need deno installed on your machine. You can install it [here](https://deno.land/#installation).

If you have a repo of markdown files you can change the utils.ts file to point to the correct github user and repo.

To deploy with deno deploy set the host env to the correct url.
## 📝 Usage
```bash
cd htmxSite
deno run --allow-all server.tsx
```


