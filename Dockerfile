FROM nginx
COPY build /usr/share/nginx/html
COPY nginx/cert.crt /etc/nginx/certs/
COPY nginx/cert.key /etc/nginx/certs/
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080