# react-tv
React App to watch movies &amp; tv shows

## Notes

Can't seem to work with CORS on RakutenTv server, probably because Origin is not allowed, which is normal being localhost. I had to use a proxy. In a normal dev environment maybe you have also a server on localhost (with Kubernetes/Docker or something like that) or allow a dev domain/IP. Nginx config could be modified also to improve those cases if needed. 

especial-x-men list doesn't exist. I saw the 404 from API, but left it on the requested lists so you can see that deprecated lists have no impact on the normal behaviour of the app. If a list fails, everything just works fine.
