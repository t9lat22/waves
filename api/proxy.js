import fetch from "node-fetch";

export default async function handler(req, res) {
  const url = req.query.url;
  if (!url) return res.status(400).send("Missing URL");

  try {
    const response = await fetch(url);
    const data = await response.text();
    res.setHeader("Content-Type", "text/html");
    res.send(data);
  } catch (err) {
    res.status(500).send("Proxy error");
  }
}



